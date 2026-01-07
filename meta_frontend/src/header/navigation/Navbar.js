import react from "react";  
import './Navbar.css';
import { Link } from "react-router";
function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/"aria-label="Go to the home page of Little Lemon">Home</Link></li>
                <li><a href="#about"aria-label="Go to the information page of Little Lemon">About</a></li>
                <li><a href="#menu"aria-label="Go to the Menu of Little Lemon">Menu</a></li>
                <li><Link to="/booking" aria-label="Go to Booking page">Booking</Link></li>
                <li><a href="#order-online"aria-label="Go to the online ordering page">Order Online</a></li>
                <li><a href="#login"aria-label="Login into your Little Lemon account">Login</a></li>


            </ul>
        </nav>
    );
}

export default Navbar;