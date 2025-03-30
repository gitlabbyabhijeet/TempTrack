import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {
    const INTL_URL =
      "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

      const HOT_URL = "https://images.unsplash.com/photo-1671568778619-b7f7d5e633d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bW1lciUyMGltYWdlfGVufDB8fDB8fHww";
      const COLD_URL = "https://images.unsplash.com/photo-1723961471395-a3e2c0acb38b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
      const RAIN_URL = "https://images.unsplash.com/photo-1723226766511-b81dc514548e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGltYWdlfGVufDB8fDB8fHww";
    return (
        <div className="InfoBox">
    <div className= "cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {
          info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL : 
          COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 
            ? <ThunderstormIcon/> 
            : info.temp > 15 
            ? <WbSunnyIcon/> : 
            <AcUnitIcon/> 
          }
        </Typography>
        <Typography variant="body2" color= "textSecondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}