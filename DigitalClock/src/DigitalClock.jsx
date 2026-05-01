import react, {useState, useEffect} from 'react'
function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date()); //refreshes the state with current moment
        },1000);

        return ()=>{
            clearInterval(intervalId);
        };
    },[]) // Effect runs only once when the component mounts

    function formatTime(){
        const hours = time.getHours();
        const meridiem = hours >=12  ? 'PM':'AM';
        const displayHours = hours % 12 || 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return(`${displayHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${meridiem}`);
    }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}
export default DigitalClock