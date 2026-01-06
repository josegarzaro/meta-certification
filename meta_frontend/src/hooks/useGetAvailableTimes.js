import react, { useEffect, useState } from "react";
import {fetchAPI} from '../malfunctioningScript.js';
export function useGetAvailableTimes(date, bookedTimes) {
   const [possibleTimes, setPossibleTimes] = useState([]);   

    useEffect(()=>{
        if(!date || date==='') return;
        const fetchedData =fetchAPI(new Date(date));
        setPossibleTimes(fetchedData); 
    }, [date]);
    if( !date || date===''){
        return [];
    } 
 
    const availableTimes = possibleTimes.filter(item => !bookedTimes[date] || ( bookedTimes[date]?.booked && !bookedTimes[date].booked.includes(item)))

    return availableTimes;
}