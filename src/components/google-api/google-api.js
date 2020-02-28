import React from 'react';

import { connect } from 'react-redux';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Spinner from "../spinner";
import { apiKey } from "../../keys";

const MapContainer = (props) => {

        const { lati, longi } = props;
    console.log('lati:', lati);
    console.log('longi:', longi);

    if (!lati || !longi) {
            return <Spinner />
        }

        return (
            <Map
                className="map-style"
                initialCenter={{
                    lat: lati,
                    lng: longi
                }}
                google={props.google} zoom={10}>

                <Marker onClick={() => {}}
                        name={'Current location'} />
            </Map>
        );
};

const mapStateToProps = (state) => {
    return {
        lati: state.locationsState.latitudeCity,
        longi: state.locationsState.longitudeCity
    };
};

export default connect(mapStateToProps)(GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer));