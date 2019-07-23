import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW}
 from "./../../../constants/weathers";
import './style.css';

const icons = {
    [CLOUD] :  "cloud",
    [CLOUDY] :  "cloudy",
    [SUN] :  "day-sunny",
    [RAIN] : "rain",
    [SNOW] :  "snow"
};

const getWeatherIcon = weatherState => {
    const icon  = icons[weatherState];
    const iconSize = "4x";

    if (icon)
        return (<WeatherIcons className="wicon" name={icon} size={iconSize}/>);
    else
        return (<WeatherIcons className="wicon" name={"day-sunny"} size={iconSize}/>);
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div  className='weatherTemperatureCont'>
        { getWeatherIcon(weatherState) }
        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">{ 'Cº' }</span>
    </div>
);

WeatherTemperature.PropTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
};

export default WeatherTemperature;