import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { autorisationSaga } from "../../actions/action";
import { userExit } from "../autorisation/autorisation-actions";
import ServiceApi from "../../services/service-api";
import BgMask from '../bg-mask';

class Header extends Component {

    state = {
        date: new Date()
    };

    componentDidMount = () => {
        this.timer = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount = () => {
        clearInterval(this.timer)
    };

    tick = () => {
        this.setState({date: new Date()})
    };

    api = new ServiceApi();

    showCurrentTime = () => {
        return (
            <div className="flex flex-col items-start mb:text-xs leading-snug">
                <div className="flex justify-center">
                    <div>{this.state.date.getDate()}</div>
                    <div className="mx-1">{this.api.getMonthTransform(this.state.date.getMonth())}</div>
                    <div>{this.state.date.getFullYear()}</div>
                </div>
                <div className="italic text-white">{this.api.getDayFromForcast(new Date())}</div>
                <div className="flex justify-center text-white">
                    <div>{this.state.date.toLocaleTimeString()}</div>
                </div>
            </div>
        );
    };

    render() {
        const { userActive, userExit } = this.props;

        return (
            <div
                className="relative flex justify-between items-center border
            w-full my-2  rounded-md p-2 text-white font-bold mb:flex-wrap text-xl">
                <BgMask />
                <div className="z-20">
                    <h2 className="mb:order-1">My Weather App</h2>
                    {this.showCurrentTime()}
                </div>
                <div className="flex justify-center mb:order-3 mb:w-full">
                    {userActive ? <Link className="z-20 mb:mr-2 mr-5" to="/home"><div className="font-doHyeon">Home</div></Link> : null}
                    {userActive ? <Link className="z-20 mb:mr-2 mr-5" to="/partners"><div className="font-doHyeon">Partners</div></Link> : null}
                    {/*<Link to="/forcast"><li className="mx-10">forcast</li></Link>*/}
                </div>
                <div className="mb:order-2 z-20">
                    {userActive ?
                        <div className="flex flex-col items-end">
                            <span onClick={() => userExit()} className="font-bold text-red-600 cursor-pointer">exit</span>
                            <span
                                className="cursor-pointer"
                                onClick={() => {}}>
                            {userActive.userName}
                        </span>
                        </div> : null}
                    <img alt="" src="#"/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userActive: state.autorisationState.userActive
    }
};

const mapDispatchToProps = {
    autorisationSaga: autorisationSaga,
    userExit: userExit
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);