import React from 'react';
import Navbar from './navigation/Navbar';
function Header(){
    return (<header>
        <Image src="logo.png" alt="Logo" />
        <Navbar/>
    </header>);
}

export default Header;