import react, { useReducer} from 'react';
import './BookingPage.css';
import BookingForm from './components/BookingForm';


const reducer = (state, action) => {
    switch(action.type){
        case 'BOOK':
            const formatedDate = new Date(action.payload.date).toISOString().split('T')[0];
            const newState = {
                    ...state,
                    [formatedDate]: {
                        booked: [ ...(state[formatedDate]?.booked ?? [])   , action.payload.time]
                    }
                };
            localStorage.setItem('bookedTimes', JSON.stringify(newState));
        return newState; 
        default:
            return state;
    }}
export default function BookingPage(){
    const storedBookings= localStorage.getItem('bookedTimes');
    const reservedTimes = JSON.parse(storedBookings) ?? {};
    const [bookedTimes, dispatchAvailableTimes] = useReducer(reducer, reservedTimes );  
    return (<main className="standard-flex-container" style={{flexDirection: 'column', alignItems: 'center'    }}>
    <section className="standard-flex-container" style={{paddingTop:'10px',width:'60%', paddingBottom:'10px'}} >
       <BookingForm bookedTimes={bookedTimes} updateAvailableTimes={dispatchAvailableTimes}/> 
    </section>

    </main>)
}