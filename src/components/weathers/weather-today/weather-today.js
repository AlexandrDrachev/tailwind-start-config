import React, { Component } from 'react';

import { connect } from 'react-redux';

import ReactGoogleMap from "../../reactGoogleMap";
import { clearFormCity } from "../../../actions/action";
import { getInputCity, getNewLocation, getNewWeatherToday } from "../weather-actions";
import Spinner from "../../spinner";
import sun from "../../../images/sun.svg";
import overcast from "../../../images/overcast.svg";
import rainyDay from "../../../images/rainyDay.svg";

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

    renderSkyImg = () => {
        return (
            <div className="w-16 h-16 mr-6">
                { this.props.weatherToday.sky < 50 ? <img alt="" src={sun} className="w-16 h-16"/> : null }
                { this.props.weatherToday.sky > 50 && this.props.weatherToday.sky < 70 ? <img alt="" src={overcast} className="w-16 h-16"/> : null }
                { this.props.weatherToday.sky > 70 ? <img alt="" src={rainyDay} className="w-16 h-16"/> : null }
            </div>
        );
    };

    render() {

        const { inputCity, newLocation, weatherToday } = this.props;

        if (!this.props.newLocation) {
            return <Spinner/>
        }

        return (
            <div className="mb:w-300 mb:flex-wrap flex justify-center">
                <div className="shadow-md rounded mb:order-1">
                    <div className="w-full flex justify-start p-2 bg-yellow-600 rounded-t-md">
                        <form onSubmit={(e) => this.onSubmit(e)}>
                            <input
                                onChange={(e) => this.onChangeCity(e)}
                                className="border border-gray-400 rounded bg-gray-300 focus:border focus:border-blue-300"
                                type="text"
                                value={ inputCity }
                                placeholder="city"/>
                        </form>
                    </div>
                    {weatherToday ? <div className="w-full flex flex-col justify-center items-start bg-yellow-500 rounded-b-md">
                    <span
                        className="ml-2 font-bold" >City name: {newLocation.cityName}</span>
                        <span className="ml-2 font-bold">
                    Coordinates:
                    <div className="ml-4 flex flex-col items-start">
                        <span>lat: {weatherToday.lat}</span>
                        <span>lng: {weatherToday.lon}</span>
                    </div>
                </span>
                    <span className="w-full ml-2 font-bold flex justify-between items-center">
                        sky: <span>{+weatherToday.sky}%</span>
                        {this.renderSkyImg()}
                    </span>
                        <span className="ml-2 font-bold">temp: {(+weatherToday.temp - 273).toFixed(1)}</span>
                        <span className="ml-2 font-bold">temp-min: {(+weatherToday.tempMin -273).toFixed(1)}</span>
                        <span className="ml-2 font-bold">temp-max: {(+weatherToday.tempMax -273).toFixed(1)}</span>
                        <span className="ml-2 font-bold">wind: {weatherToday.wind}</span>
                        <span className="ml-2 font-bold">snow: ........</span>
                    </div> : <Spinner />}
                </div>
                <div className="h-full flex flex-col items-center justify-center mb:order-2 mx-5">
                    {newLocation ? <ReactGoogleMap lati={newLocation.latitude} longi={newLocation.longitude} newLocation={newLocation} /> : <Spinner /> }
                    <button className="bg-green-500 w-full text-2xl text-white font-bold py-3 rounded hover:bg-green-600">
                        week weather forecast
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputCity: state.locationsState.inputCity,
        newLocation: state.locationsState.newLocation,
        weatherToday: state.locationsState.weatherToday
    };
};

const mapDispatchToProps = {
    getCity: getInputCity,
    clearCity: clearFormCity,
    getNewLocation: getNewLocation,
    getNewWeatherToday: getNewWeatherToday
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);