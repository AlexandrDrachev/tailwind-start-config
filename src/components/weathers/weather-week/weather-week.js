import React from 'react';

import { connect } from 'react-redux';
import OneDayWeek from "../one-day-week";
import { getWeatherForcastAction } from "../weather-actions";
import ServiceApi from "../../../services/service-api";

const WeatherWeek = ({ weatherForcast, getWeatherForcastAction }) => {

    const api = new ServiceApi();
    const { getDayFromForcast } = api;

    const renderOneDayWeather = () => {
        return weatherForcast.map((weatherOneDay) => {
            return (
                <OneDayWeek
                    tempMax={weatherOneDay.tempMax}
                    tempMin={weatherOneDay.tempMin}
                    date={new Date(weatherOneDay.date).toLocaleDateString()}
                    day={getDayFromForcast(weatherOneDay.date)}
                    key={weatherOneDay.id}
                />
            );
        });
    };

    return (
        <div className="flex justify-center mb:flex-wrap">
            {weatherForcast ? renderOneDayWeather() : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        weatherForcast: state.locationsState.weatherForcast
    };
};

const mapDispatchToProps = {
    getWeatherForcastAction: getWeatherForcastAction
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWeek);