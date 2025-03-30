import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e79b1275811443d27c47f1d76c97247c";

    let getWetherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : jsonResponse.name,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch (err) {
           throw err;
        }
        
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWetherInfo();
        updateInfo(newInfo);
        }catch(err){
           setError(true);
        }
    };
    return (
    <div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <TextField 
        id="city" 
        label="City Name" 
        variant="outlined"  
        required 
        value={city}
        onChange={handleChange}
        />
        <br/> <br />
        <Button variant="contained" type="sumbit">search</Button>
        </form>
         {error && <p style={{color: "red"}}>No such place exists!</p>}
    </div>
    );
};