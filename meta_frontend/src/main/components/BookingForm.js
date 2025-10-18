import react, {useState} from "react";

export default function BookingForm() {
    const [form, setForm] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return ( <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date"value={form.date} onChange={(e)=> setForm({...form,date:e.target.value })} id="res-date"/>
        <label for="res-time">Choose time</label>
        <select id="res-time "  value={form.time} onChange={(e)=> setForm({...form,time:e.target.value })}>

           <option>17:00</option>
           <option>18:00</option>
           <option>19:00</option>
           <option>20:00</option>
           <option>21:00</option>
           <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" value={form.guests} onChange={(e)=> setForm({...form,guests:e.target.value })} id="guests"/>
        <label for="occasion" >Occasion</label>
        <select id="occasion" value={form.occasion} onChange={(e)=> setForm({...form, occasion: e.target.value})} >
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <input type="submit" onClick={handleSubmit} value="Make Your reservation"/>
     </form>);
    }