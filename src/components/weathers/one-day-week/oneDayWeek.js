import React from 'react';

import { renderSkyImgDay, renderSkyImgNight } from "../weather-today/weather-today";

const OneDayWeek = ({ date, day, tempMax, tempMin, weatherOneDay, description, wind, newLocation }) => {

    return (
        <div className="flex flex-col justify-center bg-blue-100 p-2 m-2 rounded border-2 border-gray-700 w-350 mb:w-300">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center w-full">
                    <span>
                        <span className="mx-2">{newLocation.cityName}</span>
                        {date}
                    </span>
                    <span className="font-bold">{day}</span>
                </div>
                <span>temp min: {tempMin}&#176;</span>
                <span>temp max: {tempMax}&#176;</span>
                <div className="flex items-center justify-center w-full">
                    <span className="mx-2">{description}</span>
                    {new Date().getHours() >= 6 && new Date().getHours() < 18 ? renderSkyImgDay(weatherOneDay) : renderSkyImgNight(weatherOneDay)}
                </div>
                <div className="w-full flex justify-center">
                    wind:<span>{wind}m/s</span>
                </div>
            </div>
        </div>
    );
};

export default OneDayWeek;