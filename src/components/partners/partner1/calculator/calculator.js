import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../bg-mask';
import ModalMessage from '../../../modal-message';
import CostCalculation from './cost-calculation';
import {
    getNextStartMonthAction,
    getNextEndMonthAction,
    getPrevStartMonthAction,
    getPrevEndMonthAction,
    getStartOfRestAction,
    getStartDateOfRestAction,
    getEndDateOfRestAction,
    startOfRestErrorSaga,
    getAllDaysOfRestAction
} from "../partner1-action";
import ServiceApi from '../../../../services/service-api';
// const _ = require("lodash");

class Calculator extends Component {

    state = {
        start: false,
        end: false,
        costCalc: false
    };

    onStartTrue = () => {
        this.setState({start: true});
        this.props.getStartOfRestAction()
    };

    onStartFalse = () => {
        this.setState({start: false});
    };

    onEndTrue = () => {
        this.setState({end: true});
    };

    onEndFalse = () => {
        this.setState({end: false});
    };

    onSelectStartDateOfRest = (date)  => {
        this.props.getStartDateOfRestAction(date);
    };

    onSelectEndDateOfRest = (date)  => {
        this.props.getEndDateOfRestAction(date);
    };

    onToggleCostCalc = () => {
        this.setState({
            costCalc: true
        });
        this.props.getAllDaysOfRestAction();
    };

    render() {

        const {
            getPrevStartMonthAction, getNextStartMonthAction,
            getPrevEndMonthAction, getNextEndMonthAction,
            startMonth, endMonth, startOfRest,
            endOfRest, startOfRestError, startOfRestErrorSaga } = this.props;

        const { start, end } = this.state;

        if (startOfRestError) {
            return <ModalMessage message={`INVALID DATE FORMAT!!!`} action={startOfRestErrorSaga}/>
        }

        return (
            <div className="p-2 flex flex-col justify-center items-center">
                {!this.state.costCalc ? <div>
                    <div
                        className="
                    w-500 mb:w-full flex justify-start
                    mb:items-center mb:flex-col items-start">
                        <div
                            className="m-2 relative flex justify-center items-center p-2 border border-white rounded w-170 h-65">
                            <div
                                className="z-20 cursor-pointer mx-2"
                                onClick={() => this.onStartTrue()}>
                                <div className="flex justify-center m-1">Start of rest</div>
                                {startOfRest ?
                                    <div className="flex justify-center">
                                        <div className="m-1">{startOfRest.date}</div>
                                        <div className="m-1">{startOfRest.month}</div>
                                        <div className="m-1">{startOfRest.year}</div>
                                    </div> : null}
                            </div>
                            <BgMask />
                        </div>
                        <div>
                            {startMonth && start ? <Month
                                start={true}
                                end={false}
                                startOfRestError={startOfRestError}
                                startOfRest={startOfRest}
                                endOfRest={null}
                                onSelectDate={this.onSelectStartDateOfRest}
                                showMonth={this.onStartFalse}
                                currentMonth={startMonth}
                                getPrevMonthAction={getPrevStartMonthAction}
                                getNextMonthAction={getNextStartMonthAction} /> : null}
                        </div>
                    </div>
                    <div
                        className="
                    w-500 mb:w-full flex justify-start
                    mb:items-center mb:flex-col items-start">
                        <div className="m-2 relative flex justify-center items-center p-2 border border-white rounded w-170 h-65 mt-2">
                            <div
                                className="z-20 cursor-pointer mx-2"
                                onClick={() => this.onEndTrue()}>
                                <div className="flex justify-center m-1">End of rest</div>
                                {endOfRest ?
                                    <div className="flex justify-center">
                                        <div className="m-1">{endOfRest.date}</div>
                                        <div className="m-1">{endOfRest.month}</div>
                                        <div className="m-1">{endOfRest.year}</div>
                                    </div> : null}
                            </div>
                            <BgMask />
                        </div>
                        <div>
                            {endMonth && end ? <Month
                                start={false}
                                end={true}
                                startOfRest={null}
                                endOfRest={endOfRest}
                                startOfRestError={startOfRestError}
                                onSelectDate={this.onSelectEndDateOfRest}
                                showMonth={this.onEndFalse}
                                currentMonth={endMonth}
                                getPrevMonthAction={getPrevEndMonthAction}
                                getNextMonthAction={getNextEndMonthAction} /> : null}
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        {startOfRest && endOfRest ?
                            <div
                                onClick={() => this.onToggleCostCalc()}
                                className="z-20 w-300 mb:w-290 p-2 m-2 bg-green-600 rounded flex justify-center items-center
                            hover:bg-green-700 cursor-pointer">
                                Cost Calculation
                            </div> : null}
                    </div>
                </div> : null}
                {this.state.costCalc ? <CostCalculation /> : null}
            </div>
        );
    };
}

class Month extends Component {

    componentDidMount = () => {
        this.setState({
            startDay: this.getStartDayOfMonth()
        });
        this.renderDaysFromMonth();
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.month !== this.props.month) {
            this.renderDaysFromMonth();
        }
    };

    getStartDayOfMonth = () => {
        const { year, month } = this.props.currentMonth[0];
        return new Date(year, month, 1).getDay();
    };

    // standartYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // isLeapYear = () => {
    //     const { year } = this.props.currentMonth[0];
    //     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    // };
    //
    // days = this.isLeapYear ? this.leapYear : this.standartYear;
    api = new ServiceApi();

    renderDaysFromMonth = () => {

        const { currentMonth, onSelectDate, startOfRest,
            endOfRest, start, end} = this.props;

        return Array(currentMonth.length + currentMonth[0].indexDay)
            .fill(null)
            .map((_, index) => {
                const d = index - (currentMonth[0].indexDay - 1);
                return d > 0 ?
                    <Day
                        start={start}
                        end={end}
                        startOfRest={startOfRest}
                        endOfRest={endOfRest}
                        currentMonth={currentMonth}
                        onSelectDate={onSelectDate}
                        isToday={
                            new Date(currentMonth[0].fullResult).getFullYear() === new Date().getFullYear() &&
                            new Date(currentMonth[0].fullResult).getMonth() === new Date().getMonth() &&
                            d === new Date().getDate()}
                        date={d}
                        key={index} /> :
                    <NullDay key={index}/>;
            })
    };

    render() {
        const { currentMonth, getPrevMonthAction, getNextMonthAction, showMonth } = this.props;

        return currentMonth ? <div className="relative flex justify-center w-300 m-2 border border-white rounded">
                <BgMask />
                <div className="z-20 flex flex-col items-center">
                    <div className="w-285 flex justify-evenly items-center">
                        <div
                            onClick={() => getPrevMonthAction()}
                            className="cursor-pointer">❮ prev</div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mx-1 font-bold">{this.api.getMonthTransform(currentMonth[0].indexMonth)}</div>
                            <div className="mx-1 font-bold">{currentMonth[0].year}</div>
                        </div>
                        <div
                            onClick={() => getNextMonthAction()}
                            className="cursor-pointer">next ❯</div>
                    </div>
                    <div className="w-285 flex justify-start">
                        <div className="m-1 text-red-500 font-bold w-8 h-8 flex justify-center items-center p-1">Su</div>
                        <div className="m-1 w-8 h-8 font-bold flex justify-center items-center p-1">Mo</div>
                        <div className="m-1 w-8 h-8 font-bold flex justify-center items-center p-1">Tu</div>
                        <div className="m-1 w-8 h-8 font-bold flex justify-center items-center p-1">We</div>
                        <div className="m-1 w-8 h-8 font-bold flex justify-center items-center p-1">Th</div>
                        <div className="m-1 w-8 h-8 font-bold flex justify-center items-center p-1">Fr</div>
                        <div className="m-1 font-bold text-red-500 w-8 h-8 flex justify-center items-center p-1">Sa</div>
                    </div>
                    <div className="flex w-282 flex-wrap">
                        {this.renderDaysFromMonth()}
                    </div>
                    <div className="flex justify-center items-center m-2">
                        <div
                            onClick={() => showMonth()}
                            className="h-10 w-20 flex justify-center items-center
                        bg-blue-600 font-bold rounded cursor-pointer">
                            Ok
                        </div>
                    </div>
                </div>
            </div> : null;
    };
}

const Day = ({ currentMonth, date, isToday, onSelectDate, startOfRest, endOfRest, start, end }) => {

    const selectStartDate = {
        year: new Date(currentMonth[0].year, currentMonth[0].indexMonth, date).getFullYear(),
        month: new Date(currentMonth[0].year, currentMonth[0].indexMonth, date).getMonth(),
        date: date
    };

    const selectEndDate = {
        year: new Date(currentMonth[0].year, currentMonth[0].indexMonth, date).getFullYear(),
        month: new Date(currentMonth[0].year, currentMonth[0].indexMonth, date).getMonth(),
        date: date
    };

    const isStartOfRest = () => {
        if (!startOfRest) {
            return false;
        }
        if (new Date(currentMonth[0].fullResult).getFullYear() === startOfRest.year &&
            new Date(currentMonth[0].fullResult).getMonth() === startOfRest.indexMonth &&
            date === startOfRest.date) {
            return true;
        }
        return false;
    };

    const isEndOfRest = () => {

        if (!endOfRest) {
            return false;
        }
        if (new Date(currentMonth[0].fullResult).getFullYear() === endOfRest.year &&
            new Date(currentMonth[0].fullResult).getMonth() === endOfRest.indexMonth &&
            date === endOfRest.date) {
            return true;
        }
        return false;
    };

    if (isToday) {
        return (
            <div
                onClick={() => onSelectDate(start ? selectStartDate : selectEndDate)}
                className={`
            w-8 h-8 text-yellow-500 font-bold rounded m-1 p-1 cursor-pointer
            border border-white flex flex-col justify-center items-center`}>
                {date}
            </div>
        );
    }

    if (isStartOfRest() && start) {
        return (
            <div
                onClick={() => onSelectDate(start ? selectStartDate : selectEndDate)}
                className={`
            w-8 h-8 bg-green-700 font-bold rounded m-1 p-1 cursor-pointer
            border border-white flex flex-col justify-center items-center`}>
                {date}
            </div>
        );
    }

    if (isEndOfRest() && end) {
        return (
            <div
                onClick={() => onSelectDate(start ? selectStartDate : selectEndDate)}
                className={`
            w-8 h-8 bg-red-600 font-bold rounded m-1 p-1 cursor-pointer
            border border-white flex flex-col justify-center items-center`}>
                {date}
            </div>
        );
    }

    return (
        <div
            onClick={() => onSelectDate(start ? selectStartDate : selectEndDate)}
            className={`w-8 h-8 rounded m-1 p-1 cursor-pointer border border-white flex flex-col justify-center items-center`}>
            {date}
        </div>
    );
};

const NullDay = () => {
    return (
        <div className={`w-8 h-8 m-1 p-1 flex flex-col justify-center items-center`}>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        startOfRest: state.partner1State.startOfRest,
        endOfRest: state.partner1State.endOfRest,
        currentMonth: state.partner1State.currentMonth,
        startMonth: state.partner1State.startMonth,
        endMonth: state.partner1State.endMonth,
        startOfRestError: state.partner1State.startOfRestError
    };
};

const mapDispatchToProps = {
    getStartOfRestAction: getStartOfRestAction,
    getPrevStartMonthAction: getPrevStartMonthAction,
    getNextStartMonthAction: getNextStartMonthAction,
    getNextEndMonthAction: getNextEndMonthAction,
    getPrevEndMonthAction: getPrevEndMonthAction,
    getStartDateOfRestAction: getStartDateOfRestAction,
    startOfRestErrorSaga: startOfRestErrorSaga,
    getEndDateOfRestAction: getEndDateOfRestAction,
    getAllDaysOfRestAction: getAllDaysOfRestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);