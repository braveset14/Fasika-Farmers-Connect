import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import AppRoutes from './routes/Approutes';
import { NavBar } from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="main-area">
          {/* Navbar */}
          <NavBar onMenuClick={() => setSidebarOpen(true)} />
            <div className="pageWrapper">
          <PageWrapper >
            <AppRoutes />
          </PageWrapper>
</div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
