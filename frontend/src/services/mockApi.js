/**
 * Mock API Service Layer
 * Simulates a backend with localStorage persistence.
 * This can be easily replaced with axios/fetch calls later.
 */

const STORAGE_KEYS = {
    LISTINGS: 'fasika_listings',
    TICKETS: 'fasika_tickets',
    MESSAGES: 'fasika_messages',
    USERS: 'fasika_users'
};

// Initial Data Seed
const initialListings = [
    { id: 1, crop: 'Wheat', ownerId: 'farmer1', quantity: 50, unit: 'Quintals', location: 'Bale, Oromia', status: 'ACTIVE', postedDate: '2024-12-26', price: 4200, image: '🌾' },
    { id: 2, crop: 'White Teff', ownerId: 'farmer1', quantity: 20, unit: 'Quintals', location: 'Arsi, Oromia', status: 'PENDING', postedDate: '2025-01-12', price: 5800, image: '🌾' },
    { id: 3, crop: 'Coffee Beans', ownerId: 'farmer2', quantity: 10, unit: 'Quintals', location: 'Jimma, Oromia', status: 'ACTIVE', postedDate: '2024-11-03', price: 12000, image: '☕' },
    { id: 4, crop: 'Maize', ownerId: 'farmer3', quantity: 100, unit: 'Quintals', location: 'Sidama', status: 'ACTIVE', postedDate: '2025-02-01', price: 3100, image: '🌽' }
];

const initialTickets = [
    { id: 1, userId: 'farmer1', type: 'Technical', message: 'I cannot upload images.', status: 'OPEN', createdAt: '2025-01-08T10:00:00Z' },
    { id: 2, userId: 'buyer1', type: 'Payment', message: 'Double charged for order #123', status: 'IN_REVIEW', createdAt: '2025-01-09T14:20:00Z' }
];

const initialMessages = [
    {
        id: 1,
        listingId: 1,
        buyerId: 'buyer1',
        farmerId: 'farmer1',
        messages: [
            { sender: 'buyer1', text: 'Is the wheat still available?', time: '2025-01-09T12:00:00Z' },
            { sender: 'farmer1', text: 'Yes, it is! How many quintals do you need?', time: '2025-01-09T12:05:00Z' }
        ]
    }
];

// Helper to get/set localStorage
const get = (key, initial) => {
    const data = localStorage.getItem(key);
    if (!data) {
        localStorage.setItem(key, JSON.stringify(initial));
        return initial;
    }
    return JSON.parse(data);
};

const set = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export const mockApi = {
    // --- LISTINGS ---
    listings: {
        getAll: () => get(STORAGE_KEYS.LISTINGS, initialListings),
        getById: (id) => get(STORAGE_KEYS.LISTINGS, initialListings).find(l => l.id === parseInt(id)),
        getByFarmer: (farmerId) => get(STORAGE_KEYS.LISTINGS, initialListings).filter(l => l.ownerId === farmerId),
        create: (listing) => {
            const current = get(STORAGE_KEYS.LISTINGS, initialListings);
            const newList = { ...listing, id: Date.now(), postedDate: new Date().toISOString().split('T')[0] };
            set(STORAGE_KEYS.LISTINGS, [newList, ...current]);
            return newList;
        },
        update: (id, data) => {
            const current = get(STORAGE_KEYS.LISTINGS, initialListings);
            const updated = current.map(l => l.id === parseInt(id) ? { ...l, ...data } : l);
            set(STORAGE_KEYS.LISTINGS, updated);
            return updated.find(l => l.id === parseInt(id));
        },
        delete: (id) => {
            const current = get(STORAGE_KEYS.LISTINGS, initialListings);
            const filtered = current.filter(l => l.id !== parseInt(id));
            set(STORAGE_KEYS.LISTINGS, filtered);
        },
        deactivate: (id) => {
            return mockApi.listings.update(id, { status: 'INACTIVE' });
        }
    },

    // --- SUPPORT TICKETS ---
    tickets: {
        getAll: () => get(STORAGE_KEYS.TICKETS, initialTickets),
        getByUser: (userId) => get(STORAGE_KEYS.TICKETS, initialTickets).filter(t => t.userId === userId),
        create: (ticket) => {
            const current = get(STORAGE_KEYS.TICKETS, initialTickets);
            const newTicket = { ...ticket, id: Date.now(), status: 'OPEN', createdAt: new Date().toISOString() };
            set(STORAGE_KEYS.TICKETS, [newTicket, ...current]);
            return newTicket;
        },
        updateStatus: (id, status) => {
            const current = get(STORAGE_KEYS.TICKETS, initialTickets);
            const updated = current.map(t => t.id === parseInt(id) ? { ...t, status } : t);
            set(STORAGE_KEYS.TICKETS, updated);
        }
    },

    // --- MESSAGING ---
    messages: {
        getConversations: (userId) => {
            const all = get(STORAGE_KEYS.MESSAGES, initialMessages);
            return all.filter(c => c.buyerId === userId || c.farmerId === userId);
        },
        sendMessage: (convoId, senderId, text) => {
            const all = get(STORAGE_KEYS.MESSAGES, initialMessages);
            const updated = all.map(c => {
                if (c.id === parseInt(convoId)) {
                    return { ...c, messages: [...c.messages, { sender: senderId, text, time: new Date().toISOString() }] };
                }
                return c;
            });
            set(STORAGE_KEYS.MESSAGES, updated);
        },
        startNewConversation: (data) => {
            const all = get(STORAGE_KEYS.MESSAGES, initialMessages);
            const newConvo = { id: Date.now(), ...data, messages: [{ sender: data.buyerId, text: data.initialText, time: new Date().toISOString() }] };
            set(STORAGE_KEYS.MESSAGES, [newConvo, ...all]);
            return newConvo;
        }
    },

    // --- DASHBOARD STATS ---
    getAdminStats: () => {
        const users = JSON.parse(localStorage.getItem('fasika_users') || '[]');
        const listings = get(STORAGE_KEYS.LISTINGS, initialListings);
        return {
            totalUsers: users.length || 156,
            totalListings: listings.length,
            activeListings: listings.filter(l => l.status === 'ACTIVE').length,
            pendingApprovals: listings.filter(l => l.status === 'PENDING').length
        };
    }
};
