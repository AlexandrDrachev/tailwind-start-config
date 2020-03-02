import React from 'react';
import OneDayWeek from "../one-day-week";

const WeatherWeek = () => {

    return (
        <div className="flex justify-center mb:flex-wrap">
            <OneDayWeek />
            <OneDayWeek />
            <OneDayWeek />
            <OneDayWeek />
            <OneDayWeek />
            <OneDayWeek />
            <OneDayWeek />
        </div>
    );
};

export default WeatherWeek;