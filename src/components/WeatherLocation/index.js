import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from './../../constants/weathers'

const data = {
    temperature :5,
    weatherState: SUN,
    humidity:10,
    wind:10
}

class WeatherLocation  extends Component {
    
    constructor(){
        super();//constructor base react
        this.state ={
            city: "Madrid",
            data : data,
        };
    }

    handleUpdateClick = () =>{
        data.humidity =60;
        data.wind= 45;
        this.setState({
            data:data,
        })
    }

    render () {
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;