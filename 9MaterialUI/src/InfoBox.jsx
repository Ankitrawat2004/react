import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css";

export default function InfoBox({info}){
    const HOT_URL="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
    const COLD_URL="https://images.unsplash.com/photo-1541565437827-5f8a6f8a1b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMElNQUdFfGVufDB8fDB8fHww";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1733436275328-bbb7da0fe4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UkFJTlklMjBXRUFUSEVSJTIwJTIwSU1BR0V8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <div className="cardContainer"> 
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          info.humidity>80
          ?RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80
          ?<ThunderstormIcon/>
          :info.temp>15
          ?<WbSunnyIcon/>
          :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary"  component={"span"}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>humidity={info.humidity}</p>
        <p>Min Temp={info.tempMin}</p>
        <p>Max Temp={info.tempMax}</p>
       <p>The weather  can  be describe as {info.weather}and  feelslike {info.feelslike} &deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}








