import './styles/globals.css'
import { useState } from 'react';

import AppRoutes from './routes/Approutes';
import { NavBar } from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  return (
    
      <div className="app-layout">
          <div className="pageWrapper">
          <PageWrapper >
            <AppRoutes sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
          </PageWrapper>
          </div>
      </div>
    
)}