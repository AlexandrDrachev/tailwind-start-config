import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const apiKey = 'AIzaSyBFJFYtpM5uPMKOyqW2PZYmXR94OOgknhM';

let lat, lng;

navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
});

export class MapContainer extends React.Component {

    render() {

        if (!lat || !lng) {
            return '...loading'
        }

        return (
            <Map
                className="map-style"
                initialCenter={{
                    lat: lat,
                    lng: lng
                }}
                google={this.props.google} zoom={10}>

                <Marker onClick={() => {}}
                        name={'Current location'} />
            </Map>
        );
    };
}

export default GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer);