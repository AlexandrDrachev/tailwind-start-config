import React, { Component } from 'react';

import { connect } from 'react-redux';
import Select from 'react-select';
import {
    getSelectStatesAction, getSelectCitiesAction, getNewLocation,
    getSelectCountryAction
} from "../weathers/weather-actions";
import BgMask from '../bg-mask';

class SearchCityPanel extends Component {

    componentDidMount = () => {
        return this.props.getSelectCountryAction();
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    renderCountries = () => {
        return this.props.selectCountry.map((country) => {
            return {
                label: country,
                value: country
            };
        });
    };

    renderStates = () => {
        return this.props.selectState.map((state) => {
            return {
                label: state[0].state,
                value: state
            };
        });
    };

    renderCities = () => {
        return this.props.selectCity.map((city) => {
            return {
                label: city.city,
                value: city
            };
        });
    };

    onChangeCountry = (e) => {
        this.props.getSelectStatesAction(e.value);
    };

    onChangeState = (e) => {
        this.props.getSelectCitiesAction(e.value);
    };

    onChangeCity = (e) => {
        this.props.getNewLocation(e.value);
    };

    customStyles = {
        container: (base, state) => ({
            ...base,
            border: state.isFocused ? null : null,
            transition:
                "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
            "&:hover": {
                boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)"
            }
        }),
        control: (base, state) => ({
            ...base,
            background: "#bada55"
        }),
        valueContainer: (base, state) => ({
            ...base,
            background: "lightGray"
        }),
        multiValue: (base, state) => ({
            ...base,
            background: "lightYellow",
            maxWidth: "100px"
        })
    };

    render() {
        return (
            <div className="relative w-300 h-300 border border-white rounded p-2 flex justify-center items-center mb-2">
                <BgMask />
                <form
                    onSubmit={(e) => this.onSubmit(e)}
                    className="z-20 w-full flex flex-col justify-center items-center">
                    <fieldset className="w-full border border-gray-500 rounded p-2">
                        <legend className="text-white flex justify-center items-center text-xs">select a country</legend>
                        <Select
                            onChange={(e) => this.onChangeCountry(e)}
                            isMulti={false}
                            styles={this.customStyles}
                            options={this.props.selectCountry ? this.renderCountries() : null} />
                    </fieldset>
                    <fieldset className="w-full border border-gray-500 rounded p-2">
                        <legend className="text-white flex justify-center items-center text-xs">select a state</legend>
                        <Select
                            onChange={(e) => this.onChangeState(e)}
                            isMulti={false}
                            styles={this.customStyles}
                            options={this.props.selectState ? this.renderStates() : null} />
                    </fieldset>
                    <fieldset className="w-full border border-gray-500 rounded p-2">
                        <legend className="text-white flex justify-center items-center text-xs">select a city</legend>
                        <Select
                            onChange={(e) => this.onChangeCity(e)}
                            isMulti={false}
                            styles={this.customStyles}
                            options={this.props.selectCity ? this.renderCities() : null} />
                    </fieldset>
                </form>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        selectCountry: state.locationsState.selectCountry,
        selectState: state.locationsState.selectState,
        selectCity: state.locationsState.selectCity
    };
};

const mapDispatchToProps = {
    getSelectStatesAction: getSelectStatesAction,
    getSelectCountryAction: getSelectCountryAction,
    getSelectCitiesAction: getSelectCitiesAction,
    getNewLocation: getNewLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCityPanel);