import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraData = ({humidity, wind}) => (
    <div>
        <span>{`${humidity}  % `}</span>
        <span>{`${wind} km/h`}</span>
    </div>
);

WeatherExtraData.propTypes =
{
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
}

export default WeatherExtraData;