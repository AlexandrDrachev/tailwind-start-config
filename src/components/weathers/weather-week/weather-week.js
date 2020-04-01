import React, { Component } from 'react';

import { connect } from 'react-redux';
import OneDayWeek from "../one-day-week";
import ServiceApi from "../../../services/service-api";
import Spinner from "../../spinner";
import { getUpdateWeatherForcastAction, getWeatherForcastAction } from "../weather-actions";

class WeatherWeek extends Component {

    componentDidMount() {
        if (!this.props.newLocation) {
            return;
        }
        return this.renderForcastWeather();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.newLocation !== prevProps.newLocation) {
            this.props.getWeatherForcastAction(this.props.newLocation);
        }
    }

    api = new ServiceApi();

    renderForcastWeather = () => {
        return this.props.weatherForcast.map((weatherOneDay) => {
            return weatherOneDay ? (
                <OneDayWeek
                    newLocation={this.props.newLocation}
                    wind={weatherOneDay.wind}
                    weatherOneDay={weatherOneDay}
                    description={weatherOneDay.description}
                    tempMax={weatherOneDay.tempMax}
                    tempMin={weatherOneDay.tempMin}
                    date={new Date(weatherOneDay.date).toLocaleDateString()}
                    day={this.api.getDayFromForcast(weatherOneDay.date)}
                    key={weatherOneDay.id}/>
            ) : <Spinner/>;
        });
    };

    render() {
        const { weatherForcast } = this.props;

        return (
            <div className="mb:flex-col mb:items-center flex justify-around mb:justify-center flex-wrap">
                { weatherForcast ? this.renderForcastWeather() : null }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weatherForcast: state.locationsState.weatherForcast,
        newLocation: state.locationsState.newLocation,
        weatherToday: state.locationsState.weatherToday
    };
};

const mapDispatchToProps = {
    getUpdateWeatherForcastAction: getUpdateWeatherForcastAction,
    getWeatherForcastAction: getWeatherForcastAction
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWeek);