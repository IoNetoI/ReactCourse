import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraData from './WeatherExtraData';

const WeatherData = () => (
    <div>

        <WeatherTemperature temperature={20} weatherState={"sun"}/>
        <WeatherExtraData humidity={70} wind={18}/>

    </div>
);

export default WeatherData;