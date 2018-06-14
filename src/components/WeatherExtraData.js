import React from 'react';

const WeatherExtraData = ({humidity, wind}) => (
    <div>
        <span>{`${humidity}  % `}</span>
        <span>{`${wind} km/h`}</span>
    </div>
);

export default WeatherExtraData;