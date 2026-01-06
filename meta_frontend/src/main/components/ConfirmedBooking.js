import react from 'react';
import {useLocation} from 'react-router';
export default function ConfirmedBooking() {
    
    const bookingDetails = useLocation().state.bookingDetails;
    return (
        <main className="standard-flex-container" style={{flexDirection: 'column', alignItems: 'center'    }}>
        <section className="standard-flex-container" style={{flexDirection: 'column',paddingTop:'10px',width:'60%', paddingBottom:'10px'}} > 
            <h2>Booking Confirmed!</h2>
            <p>Your booking for {bookingDetails.date} at {bookingDetails.time} has been confirmed.</p>
        </section>
        </main>
    );
}