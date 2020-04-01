import React, { Component } from 'react';

import { connect } from 'react-redux'
import { autorisationSaga } from "../../actions/action";
import { userExit } from "../autorisation/autorisation-actions";
import ServiceApi from "../../services/service-api";

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

    getMonthTransform = (month) => {
        switch (month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return true;
        }
    };

    showCurrentTime = () => {
        return (
            <div className="flex flex-col items-start mb:text-xs leading-snug">
                <div className="flex justify-center">
                    <div>{this.state.date.getDate()}</div>
                    <div className="mx-1">{this.getMonthTransform(this.state.date.getMonth())}</div>
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
        const { userActive, autorisationSaga, userExit } = this.props;

        return (
            <div
                className="flex justify-between items-center border
            w-full my-2 min-h-100 rounded-md p-2 text-white font-bold mb:flex-wrap text-xl">
                <div>
                    <h2 className="mb:order-1">My Weather App</h2>
                    {this.showCurrentTime()}
                </div>
                <ul className="flex justify-center mb:order-3 mb:w-full">
                    {/*<Link to="/home"><li>home</li></Link>*/}
                    {/*<Link to="/forcast"><li className="mx-10">forcast</li></Link>*/}
                </ul>
                <div className="mb:order-2">
                    {userActive ?
                        <div className="flex flex-col items-end">
                            <span onClick={() => userExit()} className="font-bold text-red-600 cursor-pointer">exit</span>
                            <span
                                className="cursor-pointer"
                                onClick={() => autorisationSaga()}>
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