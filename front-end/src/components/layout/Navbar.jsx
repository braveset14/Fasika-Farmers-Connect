import { Link } from "react-router"
export function NavBar(){
    return(
        <nav>
           <Link to='/' className="navLink">Home</Link><br />
           <Link to='/market' className="navLink">Market</Link><br />
           <Link to="/weather" className="navLink">Weather</Link><br />
           <Link to="/advisory" className="navLink">Advisory</Link><br />
           <Link to="/help" className="navLink">Help</Link>
        </nav>
    )
}