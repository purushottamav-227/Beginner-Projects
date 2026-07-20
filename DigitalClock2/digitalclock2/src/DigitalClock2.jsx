import {React, useState, useEffect} from 'react'

export const DigitalClock2 = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return () => clearInterval(interval)
    },[])
  return (
    <div>
        <h1>Digital Clock</h1>
        <h2>{time}</h2>
    </div>
  )
}
