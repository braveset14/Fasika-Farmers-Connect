import AppRoutes from './routes/Approutes'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { PageWrapper } from './components/layout/PageWrapper'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <PageWrapper>
       <AppRoutes/>
      </PageWrapper>
      <Footer />
      
      </BrowserRouter>
  )
}

export default App
