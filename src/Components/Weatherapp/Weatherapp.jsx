import React,{useState} from "react";
import './weatherapp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import thunder_icon from '../Assets/thunder.png';
import haze_icon from '../Assets/haze.png';

function Weatherapp(){
    let apikey="5d893016934dcb564136a7df52be5532";
    const [wicon, setWicon] = useState(cloud_icon);
    const [wcon, setWcon] = useState("--");
    const search=async ()=>{
        const cityname=document.getElementsByClassName("cityInput");
        if(cityname[0].value===""){
            alert("please enter a city name");
            return 0;
        }

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname[0].value}&units=Metric&appid=5d893016934dcb564136a7df52be5532`;
        let response=await fetch(url);
        let data=await response.json();
        if(data.cod==='404'){
            alert("Please enter a valid city name");
            cityname[0].value="";
            return 0;
        }

        const humidity=document.getElementsByClassName("humidityprc");
        const windspeed=document.getElementsByClassName("wind-rate");
        const temperature=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");
        humidity[0].innerHTML=data.main.humidity+" %";
        windspeed[0].innerHTML=data.wind.speed+" km/hr";
        temperature[0].innerHTML=data.main.temp+" °C";
        location[0].innerHTML=data.name;



        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear_icon);
            setWcon("Clear sky");
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon);
            setWcon("Few clouds");
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle_icon);
            setWcon("Scattered clouds");
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle_icon);
            setWcon("Broken clouds");
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
            setWcon("Shower rain");
        }
        
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
            setWcon("Rain");
        }
        else if(data.weather[0].icon==="11d" || data.weather[0].icon==="11n")
        {
            setWicon(thunder_icon);
            setWcon("Thunderstorm");
            
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
            setWcon("Snow");
            
        }
        else if(data.weather[0].icon==="50d" || data.weather[0].icon==="50n")
        {
            setWicon(haze_icon);
            setWcon("Haze");
        }
        else{
            setWicon(clear_icon);
            setWcon("NaN");
        }
    }

        
    
    return(
        <>
           <div className="container">
                <div className="top-bar">
                    <input type="text" className="cityInput" placeholder="Enter city name"/>
                    <div className="search-icon" onClick={()=>{
                        search()
                    }}> 
                        <img src={search_icon} alt="search"/>


                    </div>

                </div>

                <div className="sky-condi">
                    <u>Sky Condition: {wcon}</u>
                </div>
                <div className="weather-img">
                    <img src={wicon} alt="weather"/>

                </div>
                <div className="weather-temp">
                    --
                </div>
                <div className="weather-location">
                   --

                </div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} alt="humidity"/>
                        <div className="data">
                            <div className="humidityprc">
                                --
                            </div>
                            <div className="text">
                                Humidity

                            </div>
                        </div>
                    </div>
                    

                    <div className="element">
                        <img src={wind_icon} alt="wind"/>
                        <div className="data">
                            <div className="wind-rate">
                                --
                            </div>
                            <div className="text">
                                Wind Speed

                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
 }

export default Weatherapp;