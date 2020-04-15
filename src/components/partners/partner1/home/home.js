import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../bg-mask';

class Home extends Component {

    render() {

        return (
            <div className="relative flex flex-col border border-white rounded
            justify-center items-center w-full p-2">
                <div className="z-20 mb:text-xs text-base mb:flex mb:flex-col mb:items-center w-full">
                    <img
                        className="float-left h-64 mx-1 rounded border-2 border-white mb:float-none"
                        alt=""
                        src={this.props.homePhotos[0]} />
                    <img
                        className="float-right h-48 mx-1 rounded border-2 border-white mb:hidden"
                        alt=""
                        src={this.props.homePhotos[5]} />
                    <div className="text-center">
                        {this.props.homeText}
                    </div>
                </div>
                <BgMask />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        homeText: state.partner1State.homeText,
        homePhotos: state.partner1State.homePhotos
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);