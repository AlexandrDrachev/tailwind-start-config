import React, { Component } from 'react';

import { connect } from 'react-redux';

import BgMask from '../../bg-mask';
import { partner1StateTestAction } from "./partner1-action";
import Home from './home';
import Apartaments from './apartaments';
import Contacts from './contacts';
import Calculator from './calculator';
import Gallery from './gallery';

class Partner1 extends Component {

    state = {
        home: true,
        apartaments: false,
        gallery: false,
        calculator: false,
        contacts: false
    };

    onToggleHome = () => {
        if (!this.state.home) {
            this.setState({
                home: true,
                apartaments: false,
                gallery: false,
                calculator: false,
                contacts: false
            });
        }
    };

    onToggleApartaments = () => {
        if (!this.state.apartaments) {
            this.setState({
                home: false,
                apartaments: true,
                gallery: false,
                calculator: false,
                contacts: false
            });
        }
    };

    onToggleGallery = () => {
        if (!this.state.gallery) {
            this.setState({
                home: false,
                apartaments: false,
                gallery: true,
                calculator: false,
                contacts: false
            });
        }
    };

    onToggleCalculator = () => {
        if (!this.state.calculator) {
            this.setState({
                home: false,
                apartaments: false,
                gallery: false,
                calculator: true,
                contacts: false
            });
        }
    };

    onToggleContacts = () => {
        if (!this.state.contacts) {
            this.setState({
                home: false,
                apartaments: false,
                gallery: false,
                calculator: false,
                contacts: true
            });
        }
    };

    render() {

        const { home, apartaments, gallery, calculator, contacts } = this.state;

        return (
            <div
                className="w-300 flex flex-col
            items-center text-white w-full">
                <div className="relative font-spicyRice text-4xl mb-2 border
                border-white rounded w-full flex justify-center">
                    <BgMask />
                    <div className="z-20 flex flex-col items-center w-full">
                        <div
                            onClick={() => this.props.partner1StateTestAction()}
                            className="w-full flex justify-center">Partner1</div>
                        <div className="w-full flex justify-around mb:flex-wrap">
                            <div
                                onClick={() => this.onToggleHome()}
                                className={`mx-1 text-base ${home ? `text-red-600` : `text-white`} cursor-pointer`}>home</div>
                            <div
                                onClick={() => this.onToggleApartaments()}
                                className={`mx-1 text-base ${apartaments ? `text-red-600` : `text-white`} cursor-pointer`}>apartaments</div>
                            <div
                                onClick={() => this.onToggleGallery()}
                                className={`mx-1 text-base ${gallery ? `text-red-600` : `text-white`} cursor-pointer`}>gallery</div>
                            <div
                                onClick={() => this.onToggleCalculator()}
                                className={`mx-1 text-base ${calculator ? `text-red-600` : `text-white`} cursor-pointer`}>calculator</div>
                            <div
                                onClick={() => this.onToggleContacts()}
                                className={`mx-1 text-base ${contacts ? `text-red-600` : `text-white`} cursor-pointer`}>contacts</div>
                        </div>
                    </div>
                </div>
                { this.state.home ? <Home /> : null }
                { this.state.apartaments ? <Apartaments /> : null }
                { this.state.gallery ? <Gallery /> : null }
                { this.state.contacts ? <Contacts /> : null }
                { this.state.calculator ? <Calculator /> : null }
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        partner1Test: state.partner1State.partner1Test
    };
};

const mapDispatchToProps = {
    partner1StateTestAction: partner1StateTestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Partner1);