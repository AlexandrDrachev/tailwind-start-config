import React from 'react';

import overcastDay from '../../../images/overcastDay.svg';
import overcastNight from '../../../images/overcastNight.svg';

const OneDayWeek = ({ date, day, tempMax, tempMin }) => {

    return (
        <div className="flex flex-col justify-between bg-blue-100 p-2 m-2 rounded border-2 border-gray-700">
            <div className="flex items-center justify-center">
                <div className="w-10 h-10 m-2">
                    <img
                        className="w-full h-full"
                        alt=""
                        src={overcastDay} />
                </div>
                <div className="w-10 h-10 m-2">
                    <img
                        className="w-full h-full"
                        alt=""
                        src={overcastNight} />
                </div>
            </div>
            <div className="flex flex-col items-start justify-center">
                <span>day: {day}</span>
                <span>date: {date}</span>
                <span>temp min: {tempMin}</span>
                <span>temp max: {tempMax}</span>
            </div>
        </div>
    );
};

export default OneDayWeek;