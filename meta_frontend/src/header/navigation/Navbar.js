import react from "react";  
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>


            </ul>
        </nav>
    );
}

export default Navbar;