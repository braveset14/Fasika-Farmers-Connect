import { Link } from "react-router"
export function NavBar(){
    return(
        <nav>
            <h2 className="navbar-logo">Fasika</h2>
            <div className="navbar-links">
           <Link to='/' className="navLink">Home</Link><br />
           <Link to='/market' className="navLink">Market</Link><br />
           <Link to="/weather" className="navLink">Weather</Link><br />
           <Link to="/advisory" className="navLink">Advisory</Link><br />
           <Link to="/help" className="navLink">Help</Link>
        </div>
        </nav>
    )
}