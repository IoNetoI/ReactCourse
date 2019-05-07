import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraData from './WeatherExtraData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW} from "./../../../constants/weathers";
import "./style.css";

const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={20} weatherState={SUN}/>
        <WeatherExtraData humidity={70} wind={18}/>
    </div>
);

export default WeatherData;