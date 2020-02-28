import React from 'react';

import GoogleApiWrapper from '../../google-api/google-api';

const WeatherToday = () => {

    return (
        <div className="mb:w-300 mb:flex-wrap flex justify-center">
            <div className="shadow-md rounded mb:order-1">
                <div className="w-full flex justify-start p-2 bg-yellow-600 rounded-t-md">
                    <input className="border border-gray-400 rounded bg-gray-300 focus:border focus:border-blue-300" type="text" placeholder="city"/>
                </div>
                <div className="w-full flex flex-col justify-center items-start bg-yellow-500 rounded-b-md">
                    <span className="ml-2 font-bold" >City name: .............</span>
                    <span className="ml-2 font-bold">
                    Coordinates:
                    <div className="ml-4 flex flex-col items-start">
                        <span>lat: .........</span>
                        <span>lng: .........</span>
                    </div>
                </span>
                    <span className="ml-2 font-bold">
                    sky:
                    <div>
                        <img alt="" src="#"/>
                    </div>
                </span>
                    <span className="ml-2 font-bold">temp: .......</span>
                    <span className="ml-2 font-bold">temp-min: .......</span>
                    <span className="ml-2 font-bold">temp-max: ........</span>
                    <span className="ml-2 font-bold">wind: ........</span>
                    <span className="ml-2 font-bold">snow: ........</span>
                </div>
            </div>
            <div className="h-full flex flex-col items-center justify-center mb:order-2 mx-5">
                <GoogleApiWrapper />
                <button className="bg-green-500 w-full text-2xl text-white font-bold py-3 rounded hover:bg-green-600">
                    week weather forecast
                </button>
            </div>
        </div>
    );
};

export default WeatherToday;