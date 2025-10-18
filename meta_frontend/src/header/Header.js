import React from 'react';
import Navbar from './navigation/Navbar';
import './Header.css';
function Header(){
    return (<header className="header standard-flex-container">
        <img src="images/Logo.svg" alt="Little lemon logo" />
        <Navbar/>
    </header>);
}

export default Header;