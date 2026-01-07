// import React, { useState } from 'react';
// import BuyerNavbar from '../role/buyer/BuyerNavbar';
// import Sidebar from '../components/layout/Sidebar';
// import { Footer } from '../components/layout/Footer';
// import { PageWrapper } from '../components/layout/PageWrapper';

// const BuyerLayout = ({ children }) => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     return (
//         <div className="flex min-h-screen">
            
//             <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//             <div className="flex-grow flex flex-col">
               
//                 <BuyerNavbar  role="buyer" onMenuClick={() => setSidebarOpen(true)} />

//                 {/* Main content */}
//                 <PageWrapper>
//                     {children}
//                 </PageWrapper>

//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default BuyerLayout;

