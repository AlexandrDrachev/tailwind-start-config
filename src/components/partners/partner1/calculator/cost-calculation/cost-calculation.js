import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../../bg-mask';
import FinalyResultCash from '../finaly-result-cash';
import { getCostCalculationAction } from '../../partner1-action';

const _ = require("lodash");

class CostCalculation extends Component {

    state = {
        people: JSON.parse(JSON.stringify(this.props.costCalculation.people)),
        apartaments: JSON.parse(JSON.stringify(this.props.costCalculation.apartaments)),
        menu: JSON.parse(JSON.stringify(this.props.costCalculation.menu)),
        services: JSON.parse(JSON.stringify(this.props.costCalculation.services)),
        costResult: false
    };

    renderSelectApartaments = (apartaments) => {
        let selectApartaments = [];
        for (let i in apartaments) {
            selectApartaments.push(apartaments[i]);
        }
        return selectApartaments.map((item) => {
            return (
                <div key={item.type}>
                    <label className="w-full flex justify-center items-center">
                        <input
                            value={JSON.stringify({type: item.type})}
                            defaultChecked={item.type === "Studio"}
                            type="radio"
                            name="apartaments"
                            className="m-2 cursor-pointer"/>
                        <div>
                            <div className="w-full flex justify-center items-center">
                                <div className="text-center w-136">
                                    {item.type}
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="m-2 mb:m-1 flex flex-col justify-center items-center">
                                        <div>Adult</div>
                                        <div>${item.price.adult}</div>
                                    </div>
                                    <div className="m-2 mb:m-1 flex flex-col justify-center items-center">
                                        <div>Children</div>
                                        <div>${item.price.children}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            );
        })
    };

    renderSelectMenu = (menu) => {
        const { people } = this.props;
        let selectMenu = [];
        for (let i in menu) {
            selectMenu.push(menu[i]);
        }
        return selectMenu.map((item) => {
            return (
                <div key={item.type}>
                    <label className="w-full flex justify-start items-center">
                        <input
                            className="cursor-pointer"
                            type="radio"
                            // value={JSON.stringify({
                            //     type: item.type,
                            //     price: people.children > 0 ?
                            //         ((people.adult * item.price.adult) + (people.children * item.price.children)) :
                            //         (people.adult * item.price.adult)
                            // })}
                            value={JSON.stringify({type: item.type})}
                            defaultChecked={item.type === "unlimited"}
                            name="menu"/>
                        <div className={
                            `w-full flex flex-col justify-center items-center mx-1
                            ${item.type === "no breakfast" || item.type === "no lunch" || item.type === "no dinner" ?
                                null : `border-b border-white`}`}>
                            <div className="font-bold">
                                {item.type}
                            </div>
                            <div className="w-full flex justify-center items-center">
                                {item.menu.map((i) => <div key={i} className="m-1 text-sm">{i}</div>)}
                            </div>
                            {item.type === "no breakfast" ||
                            item.type === "no lunch" ||
                            item.type === "no dinner" ? null :
                                <div className="w-full flex justify-center items-center">
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <div>Adult:</div>
                                        <div>${item.price.adult}</div>
                                    </div>
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <div>Children:</div>
                                        <div>${item.price.children}</div>
                                    </div>
                                </div>}
                        </div>
                    </label>
                </div>
            );
        });
    };

    renderSelectServices = (service) => {
        const { people } = this.props;
        let selectService = [];
        for (let i in service) {
            selectService.push(service[i]);
        }
        return selectService.map((serv) => {
            return (
                <div key={serv.type}>
                    <label className="w-full flex justify-start items-center p-2">
                        <input
                            className="cursor-pointer"
                            name="services"
                            value={JSON.stringify({type: serv.type})}
                            type="checkbox"/>
                        <div className="w-full flex flex-col justify-center items-center border-b border-white">
                            <div className="w-full flex justify-center">
                                tour:
                                <div className="font-bold mx-2">{serv.type}</div>
                            </div>
                            <div>
                                duration: {serv.duration}h
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <div className="mx-2">Adult: ${serv.price.adult}</div>
                                <div className="mx-2">Children: ${serv.price.children}</div>
                            </div>
                        </div>
                    </label>
                </div>
            );
        });
    };

    onToggleCostResult = () => {
        this.setState({costResult: true});
    };

    getCalculation = () => {
        this.props.getCostCalculationAction(this.state.people,
            this.state.apartaments, this.state.menu, this.state.services);
        this.onToggleCostResult();
    };

    onChangeAddedServices = (e) => {
        let newServices = [];
        newServices = JSON.parse(JSON.stringify(this.state.services));
        if (!e.target.checked) {
            newServices = newServices.filter((item) => item.type !== JSON.parse(e.target.value).type.toString());
            return this.setState({services: newServices});
        }
        newServices.push(JSON.parse(e.target.value));
        this.setState({services: newServices});
    };

    render() {

        const { startOfRest, endOfRest, people, priceForApartaments,
            priceForMenu, priceForServices, costCalculation, allDays } = this.props;

        return !this.state.costResult ? <div
                className="relative w-500 mb:w-300 p-2 flex flex-col justify-center items-center border border-white rounded">
                <div className="z-20 m-1 border-b border-white w-300 mb:w-full">
                    <div className="flex w-full justify-center font-fredokaOne">
                        Cost Calculation
                    </div>
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
                </div>
                <div className="z-20 flex w-full justify-center">
                    All: {allDays} days
                </div>
                <div className="z-20 m-1 border-b border-white w-300 mb:w-full">
                    <div className="flex w-full justify-center font-fredokaOne">
                        People
                    </div>
                    <div className="flex justify-center items-start">
                        <div className="flex flex-col w-full justify-center items-center">
                            <div>Adult</div>
                            <form
                                onChange={(e) => this.setState({
                                    people: {
                                        ...this.state.people,
                                        adult: {
                                            ...this.state.people.adult,
                                            value: +e.target.value
                                        }
                                    }
                                })}>
                                <label className="flex justify-center items-center">
                                    <input type="radio" className="mx-2 cursor-pointer" name="adult" value="2" defaultChecked/>
                                    2
                                </label>
                                <label className="flex justify-center items-center">
                                    <input type="radio" className="mx-2 cursor-pointer" name="adult" value="3"/>
                                    3
                                </label>
                                <label className="flex justify-center items-center">
                                    <input type="radio" className="mx-2 cursor-pointer" name="adult" value="4"/>
                                    4
                                </label>
                            </form>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <div>Children</div>
                            <form
                                onChange={(e) => this.setState({
                                    people: {
                                        ...this.state.people,
                                        children: {
                                            ...this.state.people.children,
                                            value: +e.target.value
                                        }
                                    }
                                })}>
                                <div>
                                    <label className="flex justify-center items-center">
                                        <input
                                            type="radio"
                                            className="mx-2 cursor-pointer"
                                            name="children"
                                            value="0"
                                            defaultChecked/>
                                        0
                                    </label>
                                    <label className="flex justify-center items-center">
                                        <input
                                            type="radio"
                                            className="mx-2 cursor-pointer"
                                            name="children"
                                            value="1"/>
                                        1
                                    </label>
                                    <label className="flex justify-center items-center">
                                        <input type="radio" className="mx-2 cursor-pointer" name="children" value="2"/>
                                        2
                                    </label>
                                    <label className="flex justify-center items-center">
                                        <input type="radio" className="mx-2 cursor-pointer" name="children" value="3"/>
                                        3
                                    </label>
                                    <label className="flex justify-center items-center">
                                        <input type="radio" className="mx-2 cursor-pointer" name="children" value="4"/>
                                        4
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="z-20 m-1 border-b border-white w-300 mb:w-full">
                    <div className="flex w-full justify-center font-fredokaOne">
                        Select Apartaments
                    </div>
                    <form
                        onChange={(e) => this.setState({apartaments: JSON.parse(e.target.value)})}>
                        {this.renderSelectApartaments(priceForApartaments)}
                    </form>
                </div>
                <div className="z-20 m-1 border-b border-white w-300 mb:w-full">
                    <div className="flex w-full justify-center font-fredokaOne">
                        Select Menu
                    </div>
                    <div>
                        <div className="w-full flex justify-start font-bold">
                            BREAKFAST:
                        </div>
                        <div className="w-ful flex flex-col justify-center items-center">
                            <form
                                onChange={(e) =>
                                    this.setState({
                                        menu: {
                                            ...this.state.menu,
                                            breakfast: JSON.parse(e.target.value)
                                        }
                                    })}>
                                {this.renderSelectMenu(priceForMenu.breakfast)}
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-start font-bold">
                            LUNCH:
                        </div>
                        <div className="w-ful flex flex-col justify-center items-center">
                            <form
                                onChange={(e) =>
                                this.setState({
                                    menu: {
                                        ...this.state.menu,
                                        lunch: JSON.parse(e.target.value)
                                    }
                                })}>
                                {this.renderSelectMenu(priceForMenu.lunch)}
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex justify-start font-bold">
                            DINNER:
                        </div>
                        <div className="w-ful flex flex-col justify-center items-center">
                            <form onChange={(e) =>
                                this.setState({
                                    menu: {
                                        ...this.state.menu,
                                        dinner: JSON.parse(e.target.value)
                                    }
                                })}>
                                {this.renderSelectMenu(priceForMenu.dinner)}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="z-20 m-1 border-b border-white w-300 mb:w-full">
                    <div className="flex w-full justify-center font-fredokaOne">
                        Select Services
                    </div>
                    <form
                        onChange={(e) => this.onChangeAddedServices(e)}>
                        {this.renderSelectServices(priceForServices.tours)}
                    </form>
                </div>
                <div
                    onClick={() => this.getCalculation()}
                    className="z-20 w-300 mb:w-290 p-2 m-2 bg-green-600 rounded flex justify-center items-center
                     hover:bg-green-700 cursor-pointer">
                    Cost Calculation
                </div>
                <BgMask />
            </div> : <FinalyResultCash/>
    };
}

const mapStateToProps = (state) => {
    return {
        startOfRest: state.partner1State.startOfRest,
        endOfRest: state.partner1State.endOfRest,
        people: state.partner1State.people,
        priceForApartaments: state.partner1State.priceForApartaments,
        priceForMenu: state.partner1State.priceForMenu,
        priceForServices: state.partner1State.priceForServices,
        allDays: state.partner1State.allDays,
        costCalculation: state.partner1State.costCalculation
    };
};

const mapDispatchToProps = {
    getCostCalculationAction: getCostCalculationAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CostCalculation);