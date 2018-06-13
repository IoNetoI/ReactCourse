import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraData from './WeatherExtraData';

const WeatherData = () => (
    <div>

        <WeatherTemperature temperature={20} weatherState={"sun"}/>
        <WeatherExtraData/>

    </div>
);

export default WeatherData;