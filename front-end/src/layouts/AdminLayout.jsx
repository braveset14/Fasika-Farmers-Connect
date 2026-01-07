import React from 'react';
import AdminNavbar from '../role/admin/AdminNavBar';
import { PageWrapper } from '../components/layout/PageWrapper';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex">
            {/* Admin navbar is sidebar-style, already contains menu links */}
            <AdminNavbar />

            {/* Main content */}
            <PageWrapper>
                {children}
            </PageWrapper>
        </div>
    );
};

export default AdminLayout;


