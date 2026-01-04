import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Advisory from "../pages/Advisory";
import Help from "../pages/Help";
import Notifications from "../pages/Notifications";
import Weather from "../pages/Weather";
import About from "../pages/static/AboutUs";
import Contact from "../pages/static/Contact";
import Team from "../pages/static/Team";
import Cookies from "../pages/legal/Cookies";
import Privacy from "../pages/legal/PrivacyPolicy";
import Terms from "../pages/legal/TermsOfService";
import FarmerProductListing from "../components/market/FarmerProductListing";

export default function AppRoutes(){
    return(
        
        <Routes> 
            <Route path="/" element={<Home />} ></Route>
            <Route path="/market" element={<Market />} ></Route>
            <Route path="/market/sell" element={<FarmerProductListing />} />
            <Route path="/advisory" element={<Advisory />} ></Route>
            <Route path="/help" element={<Help />} ></Route>
            <Route path="/notifications" element={<Notifications />} ></Route>
            <Route path="/weather" element={<Weather />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/team" element={<Team />} ></Route>
            <Route path="/cookies" element={<Cookies />} ></Route>
            <Route path="/privacy" element={<Privacy />} ></Route>
            <Route path="/terms" element={<Terms />} ></Route>

        </Routes>
    
    )
}