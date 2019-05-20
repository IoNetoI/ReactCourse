import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraData = ({humidity, wind}) => (
    <div  className='weatherExtraDataCont'>
        <span>{`${humidity}  % `}</span>
        <span>{`${wind} km/h`}</span>
    </div>
);

WeatherExtraData.propTypes =
{
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired,
}

export default WeatherExtraData;