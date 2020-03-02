import React from 'react';

import overcast from '../../../images/overcast.svg';
import overcastSnow from '../../../images/overcast-snow.svg';

const OneDayWeek = () => {

    return (
        <div className="flex flex-col justify-between bg-blue-100 p-2 m-2 rounded border-2 border-gray-700">
            <div className="flex items-center justify-center">
                <div className="w-10 h-10 m-2">
                    <img
                        className="w-full h-full"
                        alt=""
                        src={overcast} />
                </div>
                <div className="w-10 h-10 m-2">
                    <img
                        className="w-full h-full"
                        alt=""
                        src={overcastSnow} />
                </div>
            </div>
            <div className="flex flex-col items-start justify-center">
                <span>day: .......</span>
                <span>date: .......</span>
                <span>temp min: .....</span>
                <span>temp max: .....</span>
                <span>snow/rain: </span>
            </div>
        </div>
    );
};

export default OneDayWeek;