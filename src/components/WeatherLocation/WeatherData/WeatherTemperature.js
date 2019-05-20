import React from 'react';
import WeatherIcons from 'react-weathericons';
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
        return (<WeatherIcons name={stateToIconName(weatherState)} size="2x"/>);
        
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div  className='weatherTemperatureCont'>
        { getWeatherIcon(weatherState) }
        <span>{ `${temperature} Cº` }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
};

export default WeatherTemperature;