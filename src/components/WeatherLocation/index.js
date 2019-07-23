<<<<<<< HEAD
import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from './../../constants/weathers'

const location = "Buenos Aires,ar";
const api_key = "3882911117a87ee3c850473668f77141";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature :5,
    weatherState: SUN,
    humidity:10,
    wind:10
}

class WeatherLocation  extends Component {
    
    constructor(){
        super();//constructor base react
        this.state ={
            city: "Terrassa",
            data : data,
        };
    }

    setDataToView = (datos) =>{
        this.setState({
            data:datos,
        });
    }

    handleUpdateClick = () => {
        fetch(api_weather)
        .then(resolve => {
            return resolve.json();
            })
            .then((response) => {
                data.city = response.name;
                data.humidity = response.main.humidity;
                data.temperature= response.main.temp;
                data.wind = response.wind.speed;

                this.setDataToView(data);
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

=======
import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from './../../constants/weathers'

const data = {
    temperature :5,
    weatherState: SUN,
    humidity:10,
    wind:10
}

class WeatherLocation  extends Component {
    
    constructor(){
        super();//constructor base react
        this.state ={
            city: "Madrid",
            data : data,
        };
    }

    handleUpdateClick = () =>{
        data.humidity =60;
        data.wind= 45;
        this.setState({
            data:data,
        })
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

>>>>>>> 5e426fbc39492ff03145860ef05a6f906b169ab0
export default WeatherLocation;