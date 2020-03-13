import React, {Component} from 'react';

import { connect } from 'react-redux';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Spinner from "../spinner";
import { apiKey } from "../../keys";

class MapContainer extends Component {

    componentDidMount() {
        if (!this.props.newLocation) {
            console.log('no coords');
            return <Spinner />
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.newLocation.latitude !== this.props.newLocation.latitude &&
            prevProps.newLocation.longitude !== this.props.newLocation.longitude) {
            return setTimeout(() => this.renderMap(this.props.newLocation.latitude, this.props.newLocation.longitude), 1000);
        }
    }

    renderMap = (latitude, longitude) => {

        const { newLocation, google } = this.props;
        console.log('newLocation update:', this.props.newLocation);

        return (
            <Map
                {...this.props}
                className="map-style"
                initialCenter={{
                    lat: latitude,
                    lng: longitude
                }}
                google={google} zoom={10}>
                {console.log("newLocation in GoogleApi:", newLocation)}
                <Marker onClick={() => {}}
                        name={'Current location'} />
            </Map>
        );
    };

    render() {

        const { newLocation: { latitude, longitude } } = this.props;

        return this.renderMap(latitude, longitude);
    }
}

const mapStateToProps = (state) => {
    return {
        newLocation: state.locationsState.newLocation
    };
};

export default connect(mapStateToProps)((GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer)));