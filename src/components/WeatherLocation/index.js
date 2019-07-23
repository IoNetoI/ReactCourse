import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from './../../constants/weathers'

const location = "Buenos Aires,ar";
const api_key = "3882911117a87ee3c850473668f77141";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    city:"Terrassa",
    temperature :5,
    weatherState: SUN,
    humidity:10,
    wind:'10'
}

class WeatherLocation  extends Component {
    
    constructor(){
        super();//constructor base react
        this.state ={
            city: data.city,
            data : data,
        };
    }

getWeatherState = weather_data => {
    return SUN;
}

getData = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const city = weather_data.name;
    const weatherState = this.getWeatherState(weather_data);

    const data = {
        city,
        humidity,
        temperature : temp,
        weatherState,
        wind:`${speed} m/s`
    }

    return data;
}

    setDataToView = (datos) =>{
        this.setState({
            city: datos.city,
            data:datos,
        });
    }

    handleUpdateClick = () => {
        fetch(api_weather)
        .then(resolve => {
            return resolve.json();
            })
            .then((response) => {
                this.setDataToView(this.getData(response));
            });   
    }

    render () {
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;