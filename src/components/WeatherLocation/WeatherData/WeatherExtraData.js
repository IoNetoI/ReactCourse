<<<<<<< HEAD
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

=======
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

>>>>>>> 5e426fbc39492ff03145860ef05a6f906b169ab0
export default WeatherExtraData;