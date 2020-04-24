import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../bg-mask';

class Gallery extends Component {

    state = {
        index: 8
    };

    onTogglePrevPhoto = () => {
        if (this.state.index < 0) {
            return this.setState({index: this.props.apartamentsPhotos.length - 2})
        }
        this.setState({index: this.state.index - 1});
    };

    onToggleNextPhoto = () => {
        if (this.state.index > this.props.apartamentsPhotos.length - 2) {
            return this.setState({index: 0})
        }
        this.setState({index: this.state.index + 1});
    };

    render() {

        return (
            <div className="w-full p-2 flex flex-col justify-center items-center">
                <div className="
                relative w-500 h-310 mb:w-300 mb:h-200 flex justify-center items-center p-2 border border-white rounded ">
                    <div
                        onClick={() => this.onTogglePrevPhoto()}
                        className="z-20 text-6xl mb:text-3xl cursor-pointer">❮</div>
                    <div className="z-20 w-full h-full flex flex-col justify-center items-center mx-2">
                        <img
                            className="rounded"
                            alt=""
                            src={this.props.apartamentsPhotos[this.state.index]} />
                    </div>
                    <div
                        onClick={() => this.onToggleNextPhoto()}
                        className="z-20 text-6xl mb:text-3xl cursor-pointer">❯</div>
                    <div className="
                    z-20 absolute w-10 h-10flex justify-center items-center cursor-pointer text-3xl
                    bottom-0 mb-2 mr-2 mb:mr-1 right-0">&#128269;</div>
                    <BgMask />
                </div>
                <div className="my-2 w-full flex mb:overflow-x-auto justify-around flex-wrap">
                    {this.props.apartamentsPhotos.map((photo, idx) => {
                        return (
                            <img
                                onClick={() => this.setState({index: idx})}
                                key={photo}
                                className="
                                w-200 mb:w-100 m-2 mb:m-1 rounded cursor-pointer "
                                alt=""
                                src={photo}/>
                        );
                    })}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        apartamentsPhotos: state.partner1State.apartamentsPhotos
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);