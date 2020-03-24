import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Switch, Route, Link } from "react-router-dom";

import ReactGoogleMap from "../../reactGoogleMap";
import { clearFormCity } from "../../../actions/action";
import {
    getInputCity,
    getNewLocation,
    getNewWeatherToday,
    getWeatherForcastAction
} from "../weather-actions";
import ServiceApi from "../../../services/service-api";
import Spinner from "../../spinner";
import clearSkyDay from "../../../images/clearSkyDay.svg";
import clearSkyNight from "../../../images/clearSkyNight.svg";
import overcastDay from "../../../images/overcastDay.svg";
import overcastNight from "../../../images/overcastNight.svg";
import rainyDay from "../../../images/rainyDay.svg";
import rainyNight from "../../../images/rainyNight.svg";
import snowDay from "../../../images/snowDay.svg";
import snowNight from "../../../images/snowNight.svg";
import WeatherWeek from "../weather-week";

export const renderSkyImgDay = (weatherToday) => {

    return (
        <div className="w-6 h-6">
            { weatherToday.description === 'clear sky' ? <img alt="" src={clearSkyDay} className="w-6 h-6"/> : null }
            { weatherToday.description === 'rain' ||
            weatherToday.description === 'light intensity shower rain' ||
            weatherToday.description === 'light rain' ? <img alt="" src={rainyDay} className="w-6 h-6"/> : null }
            { weatherToday.description === 'snow' ||
            weatherToday.description === 'light snow' ? <img alt="" src={snowDay} className="w-6 h-6"/> : null }
            { weatherToday.description === 'overcast clouds' ||
            weatherToday.description === 'broken clouds' ||
            weatherToday.description === 'scattered clouds' ||
            weatherToday.description === 'few clouds'? <img alt="" src={overcastDay} className="w-6 h-6"/> : null }
        </div>
    );
};

export const renderSkyImgNight = (weatherToday) => {

    return (
        <div className="w-6 h-6">
            { weatherToday.description === 'clear sky' ? <img alt="" src={clearSkyNight} className="w-6 h-6"/> : null }
            { weatherToday.description === 'rain' ||
            weatherToday.description === 'light intensity shower rain' ||
            weatherToday.description === 'light rain' ? <img alt="" src={rainyNight} className="w-6 h-6"/> : null }
            { weatherToday.description === 'snow' ||
            weatherToday.description === 'light snow' ? <img alt="" src={snowNight} className="w-6 h-6"/> : null }
            { weatherToday.description === 'overcast clouds' ||
            weatherToday.description === 'broken clouds' ||
            weatherToday.description === 'scattered clouds' ||
            weatherToday.description === 'few clouds' ? <img alt="" src={overcastNight} className="w-6 h-6"/> : null }
        </div>
    );
};

class WeatherToday extends Component {

    componentDidMount() {
        if (this.props.newLocation) {
            this.props.getNewWeatherToday(this.props.newLocation);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.newLocation !== prevProps.newLocation) {
            this.props.getNewWeatherToday(this.props.newLocation);
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getNewLocation(this.props.inputCity);
        this.props.getNewWeatherToday(this.props.newLocation);
        this.props.clearCity();
    };

    onChangeCity = (e) => {
        return this.props.getCity(e.target.value);
    };

    active = false;

    renderForcast = () => {
        this.active = !this.active;
        console.log(this.active);
        return this.props.getWeatherForcastAction(this.props.newLocation);
    };

    render() {

        const { inputCity, newLocation, weatherToday } = this.props;
        const api = new ServiceApi();

        if (!this.props.newLocation) {
            return <Spinner/>
        }

        return (
            <div className="flex flex-col justify-center items-center">
                {!this.active ? <div className="mb:w-300 mb:flex-wrap flex justify-center">
                    <div className="shadow-md rounded mb:order-1 mb-2">
                        <div className="w-full flex justify-start p-2 bg-yellow-600 rounded-t-md">
                            <form onSubmit={this.onSubmit}>
                                <input
                                    onChange={(e) => this.onChangeCity(e)}
                                    className="
                                    border border-gray-400 rounded bg-gray-300
                                    focus:border focus:border-blue-300"
                                    type="text"
                                    value={ inputCity }
                                    placeholder="city"/>
                                <button
                                    onClick={onsubmit}
                                    className="ml-1 px-2 bg-blue-500 rounded">ok</button>
                            </form>
                        </div>
                        { weatherToday ?
                            <div className="w-full flex flex-col justify-center items-start bg-yellow-500 rounded-b-md">
                            <div className="flex justify-center mx-2 font-bold">
                                <span>{new Date().toLocaleDateString()}</span>
                                <span className="mx-5">{api.getDayFromForcast(new Date())}</span>
                            </div>
                            <span
                                className="ml-2 font-bold" >{newLocation.cityName}</span>
                            <span className="ml-2 font-bold">
                                Coordinates:
                                <div className="ml-4 flex flex-col items-start">
                                    <span>lat: {weatherToday.lat}</span>
                                    <span>lng: {weatherToday.lon}</span>
                                </div>
                            </span>
                            <div className="w-full ml-2 font-bold flex flex-col items-start">
                                <span>clouds:</span>
                                <div>
                                    <div className="flex flex-wrap">
                                        <span className="ml-4">{+weatherToday.sky}%</span>
                                        <span className="mx-2 font-bold">{weatherToday.description}</span>
                                        {
                                            new Date().getHours() >= 6 && new Date().getHours() < 18 ?
                                                renderSkyImgDay(weatherToday) : renderSkyImgNight(weatherToday)}
                                    </div>
                                </div>
                            </div>
                            <span className="ml-2 font-bold">
                                temp: {(+weatherToday.temp - 273).toFixed(1)}&#176;
                            </span>
                            <span className="ml-2 font-bold">
                                temp-min: {(+weatherToday.tempMin -273).toFixed(1)}&#176;
                            </span>
                            <span className="ml-2 font-bold">
                                temp-max: {(+weatherToday.tempMax -273).toFixed(1)}&#176;
                            </span>
                            <span className="ml-2 font-bold">
                                wind: {weatherToday.wind}
                                </span>
                        </div> : <Spinner /> }
                    </div>
                    <div className="h-full flex flex-col items-center justify-center mb:order-2 mx-5">
                        { newLocation ?
                            <ReactGoogleMap
                                lati={newLocation.latitude}
                                longi={newLocation.longitude}
                                newLocation={newLocation} /> : <Spinner /> }
                    </div>
                </div> : null }
                <button
                    onClick={() => this.renderForcast()}
                    className="bg-green-500 w-400 m-2 text-2xl text-white font-bold py-3 rounded hover:bg-green-600 mb:w-300">
                    {!this.active ? 'show week forecast' : 'close week forcast'}
                </button>
                { this.active ? <WeatherWeek /> : null }
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputCity: state.locationsState.inputCity,
        newLocation: state.locationsState.newLocation,
        weatherToday: state.locationsState.weatherToday,
        weatherForcast: state.locationsState.weatherForcast
    };
};

const mapDispatchToProps = {
    getCity: getInputCity,
    clearCity: clearFormCity,
    getNewLocation: getNewLocation,
    getNewWeatherToday: getNewWeatherToday,
    getWeatherForcastAction: getWeatherForcastAction
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);