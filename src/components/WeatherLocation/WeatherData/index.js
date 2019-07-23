<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraData from './WeatherExtraData';
import "./style.css";


const WeatherData = ({data :{temperature, weatherState, humidity, wind}}) => {   
    return (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraData humidity={humidity} wind={wind}/>
    </div>)
}

WeatherData.PropTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

=======
import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraData from './WeatherExtraData';
import "./style.css";


const WeatherData = ({data :{temperature, weatherState, humidity, wind}}) => {   
    return (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraData humidity={humidity} wind={wind}/>
    </div>)
}

WeatherData.PropTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

>>>>>>> 5e426fbc39492ff03145860ef05a6f906b169ab0
export default WeatherData;