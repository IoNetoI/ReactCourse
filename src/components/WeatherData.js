import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraData from './WeatherExtraData';

const WeatherData = () => (
    <div>
        <WeatherTemperature/>
        <WeatherExtraData humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData;