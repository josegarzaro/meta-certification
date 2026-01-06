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
        updateAvailableTimes({type: 'BOOK', payload: {date: form.date, time: form.time}});
        navigate('/confirmed', {state: {bookingDetails: form}});
        
    };
 
    return ( <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date"value={form.date} onChange={(e)=> setForm({...form,date:e.target.value })} id="res-date"/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time"  value={form.time} onChange={(e)=> setForm({...form,time:e.target.value })}>
        {availableTimes?.map((time)=> (
                <option key={time} value={time}>{time}</option>
            ))}
        </select>
        <label htmlFor="guests" data-testid="BookingFormNumberOfGuestsLabel">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" value={form.guests} onChange={(e)=> setForm({...form,guests:e.target.value })} id="guests"/>
        <label htmlFor="occasion" >Occasion</label>
        <select id="occasion" value={form.occasion} onChange={(e)=> setForm({...form, occasion: e.target.value})} >
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <input type="submit" onClick={handleSubmit} value="Make Your reservation"/>
     </form>);
    }