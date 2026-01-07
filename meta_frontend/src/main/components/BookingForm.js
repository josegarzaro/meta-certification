import react, {useState} from "react";
import {useGetAvailableTimes} from "../../hooks/useGetAvailableTimes";
import {useNavigate} from 'react-router';

export default function BookingForm({bookedTimes, updateAvailableTimes}) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday'
    });

    const availableTimes = useGetAvailableTimes(form.date, bookedTimes);
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.date || !form.time || !form.guests || !form.occasion){
            alert("Please fill all the fields");
            console.log("incomplete form");
            console.log("incomplete time", form.time);
            return;
        }
        if(form.guests < 1 || form.guests > 10){
            alert("Number of guests must be between 1 and 10");
            return;
        }

        updateAvailableTimes({type: 'BOOK', payload: {date: form.date, time: form.time}});
        navigate('/confirmed', {state: {bookingDetails: form}});
        
    };
 
    return ( <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" required value={form.date} onChange={(e)=> {if(new Date(e.target.value) >= new Date()){setForm({...form,date:e.target.value })}else{alert("Booking Date must be in the future");};}} id="res-date"/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" required  value={form.time} onChange={(e)=> setForm({...form,time:e.target.value })}>
        {availableTimes?.map((time)=> (
                <option key={time} value={time}>{time}</option>
            ))}
        </select>
        <label htmlFor="guests" data-testid="BookingFormNumberOfGuestsLabel">Number of guests</label>
        <input type="number" placeholder="1" required min="1" max="10" value={form.guests} onChange={(e)=> {setForm({...form,guests:e.target.value })}} id="guests"/>
        <label htmlFor="occasion" >Occasion</label>
        <select id="occasion" required value={form.occasion} onChange={(e)=> setForm({...form, occasion: e.target.value})} >
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <input type="submit" aria-label="Click to reserve your table" disabled={!form.date || !form.time || !form.guests || !form.occasion} onClick={handleSubmit} value="Make Your reservation"/>
     </form>);
    }