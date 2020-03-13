import React, {Component} from 'react';

import { compose, withProps, withState, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { apiKey } from "../../keys";
import Spinner from "../spinner";

const MyGoogleMap = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `290px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withState('zoom', 'onZoomChange', 8),
    withHandlers(() => {
        const refs = {
            map: undefined,
        };

        return {
            onMapMounted: () => ref => {
                refs.map = ref;
                console.log(refs.map);
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom())
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => {
    return (
        <GoogleMap
            defaultCenter={props.center}
            zoom={props.zoom}
            ref={props.onMapMounted}
            onZoomChanged={props.onZoomChanged}
        >{console.log(props.mapElement)}
            <Marker
                position={{ lat: props.center.lat, lng: props.center.lng }}
            >
            </Marker>
        </GoogleMap>
    );
});

export default class ReactGoogleMap extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.lati !== this.props.lati && prevProps.longi !== this.props.longi) {
            console.log('update coords', this.props.lati);
            return this.renderMyGoogleMap();
        }
    }

    renderMyGoogleMap = () => {
        return (
            <div className="h-300 w-300 border-2 border-gray-900">
                <MyGoogleMap
                    center ={ { lat: this.props.lati, lng: this.props.longi } }
                    {...this.props}/>
            </div>
        );
    };

    render() {
        if (!this.props.lati || !this.props.longi) {
            return <Spinner />
        }
        return this.renderMyGoogleMap();
    };
}