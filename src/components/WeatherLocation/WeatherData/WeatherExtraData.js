import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraData = ({humidity, wind}) => (
    <div className='weatherExtraDataCont'>
        <span className="extraInfoText">{`Humedad ${humidity}  % `}</span>
        <span className="extraInfoText">{`Viento ${wind} km/h`}</span>
    </div>
);

WeatherExtraData.PropTypes =
{
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired,
}

export default WeatherExtraData;