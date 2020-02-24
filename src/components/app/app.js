import React from "react";

import GoogleApiWrapper, {MapContainer} from '../google-api/google-api';


export default class App extends React.Component {

    render() {

        return (
            <div className="text-red-500 flex flex-col items-center w-full h-full">
                App
                <div className="flex justify-center">
                    <div>
                        dhsdlkfjhsl
                    </div>
                    <div className="">
                        <GoogleApiWrapper />
                    </div>
                    <div>
                        ekghlekurghrt
                    </div>
                </div>
            </div>
        );
    };
}
