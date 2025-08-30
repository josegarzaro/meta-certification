import React from 'react';
import Navbar from '../header/navigation/Navbar';
import './Footer.css'

function Footer(){
    return (<footer className="standard-flex-container" style={{justifyContent: 'center', alignItems: 'flex-start', gap: '4em'}}>
        <figure>
           <img src="images/restaurant.jpg" alt="Image of something" max-width="50 px"/>
        </figure>
       <section>
            <h2>Dormat Navigation</h2>
            <Navbar/>     
        </section> 
   
        <section>
            <h2>Contact</h2>
            <ul>
                <li>Adress</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
        </section>
        <section>
            <h2>Social Media Links</h2>
            <ul>
                <li>Address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
        </section>

    </footer>);
}

export default Footer;