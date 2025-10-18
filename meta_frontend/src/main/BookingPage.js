import react, { useState } from 'react';
import './BookingPage.css';
import BookingForm from './components/BookingForm';
export default function BookingPage(){
    return (<main>
        
    <section className="standard-flex-container" style={{paddingLeft:'10px',width:'100%', paddingBottom:'10px'}} >
   <BookingForm/> 
   </section>

    </main>)
}