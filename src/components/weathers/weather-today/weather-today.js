import React, { Component } from 'react';

import { connect } from 'react-redux';

import ReactGoogleMap from "../../reactGoogleMap";
import { getNewLocation, getNewWeatherToday, getWeatherForcastAction } from "../weather-actions";
import ServiceApi from "../../../services/service-api";
import Spinner from "../../spinner";
import SearchCityPanel from '../../search-city-panel';
import clearSkyDay from "../../../images/clearSkyDay.svg";
import clearSkyNight from "../../../images/clearSkyNight.svg";
import overcastDay from "../../../images/overcastDay.svg";
import overcastNight from "../../../images/overcastNight.svg";
import rainyDay from "../../../images/rainyDay.svg";
import rainyNight from "../../../images/rainyNight.svg";
import snowDay from "../../../images/snowDay.svg";
import snowNight from "../../../images/snowNight.svg";
import WeatherWeek from "../weather-week";
import BgMask from '../../bg-mask';
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

    active = false;

    renderForcast = () => {
        this.active = !this.active;
        console.log(this.active);
        return this.props.getWeatherForcastAction(this.props.newLocation);
    };

    render() {

        const { newLocation, weatherToday } = this.props;
        const api = new ServiceApi();

        if (!this.props.newLocation) {
            return <Spinner/>
        }

        return (
            <div className="flex flex-col justify-center items-center">
                {!this.active ? <div className="mb:w-300 mb:flex-wrap flex justify-center items-center">
                    <SearchCityPanel />
                    <div className="relative shadow-md rounded mb:order-1 mb-2 mx-5">
                        { weatherToday ?
                        <div className="text-white w-300 h-300 flex flex-col justify-center items-start border border-white rounded">
                            <BgMask />
                            <div className="z-20 flex flex-col justify-center items-center w-full">
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
                            </div>
                        </div> : <Spinner /> }
                    </div>
                    <div className="mb:order-2">
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
                    {!this.active ? 'show week forcast' : 'close week forcast'}
                </button>
                { this.active ? <WeatherWeek /> : null }
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        newLocation: state.locationsState.newLocation,
        weatherToday: state.locationsState.weatherToday,
        weatherForcast: state.locationsState.weatherForcast
    };
};

const mapDispatchToProps = {
    getNewLocation: getNewLocation,
    getNewWeatherToday: getNewWeatherToday,
    getWeatherForcastAction: getWeatherForcastAction
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);