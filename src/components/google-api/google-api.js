import React from 'react';

import { connect } from 'react-redux';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Spinner from "../spinner";
import { apiKey } from "../../keys";

const MapContainer = (props) => {

    const { lati, longi, newLocation, google } = props;

    console.log('lati:', lati);
    console.log('longi:', longi);
    console.log('newLocation:', newLocation);

    if (!lati || !longi) {
        console.log('no coords');
            return <Spinner />
        }

        return (
            <Map
                {...props}
                className="map-style"
                initialCenter={{
                    lat: newLocation.latitude,
                    lng: newLocation.longitude
                }}
                google={google} zoom={10}>

                <Marker onClick={() => {}}
                        name={'Current location'} />
            </Map>
        );
};

// const mapStateToProps = (state) => {
//     return {
//         lati: state.locationsState.latitudeCity,
//         longi: state.locationsState.longitudeCity,
//         newLocation: state.locationsState.newLocation
//     };
// };

export default (GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer));