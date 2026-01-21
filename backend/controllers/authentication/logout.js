const pool = require('../../config/dbConfig');
const crypto = require('crypto');

// Helper to get consistent cookie options matching your login
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'None',
    path: '/',
};

/**
 * Logout from current device (single session)
 */
const logoutSingleDevice = async (req, res) => {
    const client = await pool.connect();
    try {
        const refreshToken = req.cookies.refresh_token;

        if (refreshToken) {
            const refreshTokenHash = crypto
                .createHash('sha256')
                .update(refreshToken)
                .digest('hex');

            // Revoke the session in DB
            await client.query(
                `UPDATE user_sessions 
                 SET is_revoked = true 
                 WHERE refresh_token_hash = $1`,
                [refreshTokenHash]
            );
        }

        // ✅ Clear BOTH tokens used in your login controller
        res.clearCookie('auth_token', cookieOptions);
        res.clearCookie('refresh_token', cookieOptions);

        return res.json({ success: true, message: 'Logged out from this device' });
    } catch (err) {
        console.error('Logout error:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
    } finally {
        client.release();
    }
};

/**
 * Terminate all other sessions (keep current device active)
 */
const terminateOtherSessions = async (req, res) => {
    const client = await pool.connect();
    try {
        const refreshToken = req.cookies.refresh_token;
        // ✅ Match the key 'userInternalId' from your login JWT payload
        const userInternalId = req.user.userInternalId; 

        if (!refreshToken) {
            return res.status(400).json({ error: 'No refresh token found' });
        }

        const refreshTokenHash = crypto
            .createHash('sha256')
            .update(refreshToken)
            .digest('hex');

        // ✅ Ensure column name 'user_internal_id' matches your session table
        await client.query(
            `UPDATE user_sessions
             SET is_revoked = true
             WHERE user_internal_id = $1
               AND refresh_token_hash <> $2`,
            [userInternalId, refreshTokenHash]
        );

        return res.json({ success: true, message: 'Terminated all other sessions' });
    } catch (err) {
        console.error('Terminate others error:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
    } finally {
        client.release();
    }
};

module.exports = {
    logoutSingleDevice,
    terminateOtherSessions
};
