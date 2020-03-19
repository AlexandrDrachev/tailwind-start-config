import React, { Component } from 'react';

import { connect } from 'react-redux';
import OneDayWeek from "../one-day-week";
import ServiceApi from "../../../services/service-api";
import Spinner from "../../spinner";
import { getUpdateWeatherForcastAction } from "../weather-actions";

class WeatherWeek extends Component {

    componentDidMount() {
        if (!this.props.weatherForcast) {
            return true;
        }
        this.renderOneDayWeather();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.newLocation !== prevProps.newLocation) {
            console.log('******************', this.props.newLocation.cityName);
            // this.props.getUpdateWeatherForcastAction(this.props.newLocation);
        }
    }

    api = new ServiceApi();

    renderOneDayWeather = () => {
        return this.props.weatherForcast.map((weatherOneDay) => {
            return weatherOneDay ? (
                <OneDayWeek
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
            <div className="flex justify-center mb:flex-wrap">
                {weatherForcast ? this.renderOneDayWeather() : null}
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
    getUpdateWeatherForcastAction: getUpdateWeatherForcastAction
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWeek);