import {useState, useEffect} from 'react'

function Weather(){
    const [city, setCity]=useState("");
    const [weather, setWeather]=useState();
    const [loading, setLoading]=useState(false);
    async function getWeather(){

        if(city.trim()==""){
            alert("Please enter city");
            return;
        }
        try{
            setLoading(true)
            const API_KEY = import.meta.env.VITE_API_KEY;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

            const data = await response.json();

            if(data.cod === "404"){ //cod is a code status cod=200 success, 404 not found, 500 server issue
                window.alert("city not found")
                return
            }
            console.log(data);
            setWeather(data);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        }
    }
  return (
    <>
        <div>
            <h1>Weather App</h1>
            <input type="text" placeholder='Enter your city' value={city} onChange={(e)=>{setCity(e.target.value)}} />
            <button onClick={getWeather}>Search</button>
            {weather &&(  //only shows data if weather exists
                <div>
                    <h3>City:{weather.name}</h3>
                    <h3>temperature:{weather.main.temp}<sup>o</sup>C</h3>
                    <h3>Humidity:{weather.main.humidity}%</h3>
                </div>
            )}
            {loading && ( //only show loading if loading=true
                <h5>Loading...</h5>
            )} 
        </div>
    </>
    
  )
}
export default Weather
