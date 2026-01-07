import React, { useState } from 'react';
import FarmerNavbar from '../role/farmer/FarmerNavbar';
import Sidebar from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { PageWrapper } from '../components/layout/PageWrapper';

const FarmerLayout = ({ children,sidebarOpen,toggleSidebar }) => {
    

    return (
        <div className="flex min-h-screen">
          
            <Sidebar role="farmer" isOpen={sidebarOpen} onClose={() => toggleSidebar(false)} />

            <div className="flex-grow flex flex-col">
               
                <FarmerNavbar onMenuClick={toggleSidebar} />
                <PageWrapper>
                    {children}
                </PageWrapper>

                <Footer />
            </div>
        </div>
    );
};

export default FarmerLayout;
