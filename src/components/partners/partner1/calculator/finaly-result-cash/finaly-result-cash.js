import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../../bg-mask';

class FinalyResultCash extends Component {

    render() {

        const { costCalculation, cash, startOfRest, endOfRest, allDays } = this.props;
        const { people, apartaments, menu, services } = costCalculation;

        return (
            <div className="flex flex-col justify-center items-center">
                <div
                    className="
                relative w-500 mb:w-300 border border-white rounded
                flex flex-col justify-center items-center p-2">
                    <div className="z-20 w-full flex flex-col justify-center items-center border-b border-white py-2">
                        client #{Math.floor(Math.random()*10000)}
                    </div>
                    <div className="z-20 w-full flex flex-col justify-center items-center border-b border-white py-2">
                        <div className="flex w-full justify-center items-center">
                            <div className="mx-2 flex flex-col justify-center items-center">
                                <div>{startOfRest ? `Start of rest:` : null}</div>
                                <div>{startOfRest ? `${startOfRest.date} ${startOfRest.month} ${startOfRest.year}` : null}</div>
                            </div>
                            <div className="mx-2 flex flex-col justify-center items-center">
                                <div>{endOfRest ? `End of rest:` : null}</div>
                                <div>{endOfRest ? `${endOfRest.date} ${endOfRest.month} ${endOfRest.year}` : null}</div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center">
                            All: {allDays} days
                        </div>
                    </div>
                    <div className="z-20 w-full flex flex-col justify-center items-center border-b border-white py-2">
                        <div className="w-full flex justify-center">People:</div>
                        <div className="w-full flex justify-around">
                            {people.adult.value > 0 ?
                                <div className="flex justify-center">
                                    <div>Adult:</div>
                                    <div className="mx-2">{people.adult.value}</div>
                                </div> : null}
                            {people.children.value > 0 ?
                                <div className="flex justify-center">
                                    <div>Children:</div>
                                    <div className="mx-2">{people.children.value}</div>
                                </div> : null}
                        </div>
                    </div>
                    <div className="z-20 w-full flex justify-center items-center border-b border-white py-2">
                        <div>Apartaments:</div>
                        <div className="mx-2">{apartaments.type}</div>
                    </div>
                    <div className="z-20 w-full flex flex-col justify-center items-center border-b border-white py-2">
                        <div>Menu:</div>
                        <div className="w-full flex justify-around text-center">
                            <div className="flex flex-col justify-center items-center">
                                <div>Breakfast:</div>
                                <div>{ menu.breakfast.type }</div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div>Lunch:</div>
                                <div>{ menu.lunch.type }</div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div>Dinner:</div>
                                <div>{ menu.dinner.type }</div>
                            </div>
                        </div>
                    </div>
                    <div className="z-20 w-full flex flex-col justify-center items-center border-b border-white py-2">
                        <div>Services:</div>
                        <div className="w-full flex justify-around text-center flex-wrap">
                            {services.map((service) => {
                                if (service.type === "no services") {
                                    return null;
                                }
                                return (
                                    <div key={service.type}
                                        className="
                                        flex flex-col justify-center items-center m-2 p-2 border border-white rounded">
                                        { service.type }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <BgMask />
                </div>
                <div className="w-full flex justify-end items-center p-2 m-2">
                    <div className="relative w-300 mb:w-150 flex justify-end border border-white rounded">
                        <div className="z-20 w-full p-2 flex justify-center">
                            <div>Cash:</div>
                            <div className="mx-2">${cash}</div>
                        </div>
                        <BgMask />
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        costCalculation: state.partner1State.costCalculation,
        cash: state.partner1State.cash,
        startOfRest: state.partner1State.startOfRest,
        endOfRest: state.partner1State.endOfRest,
        allDays: state.partner1State.allDays,
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(FinalyResultCash);