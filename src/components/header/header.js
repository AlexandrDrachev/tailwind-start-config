import React from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { autorisationSaga } from "../../actions/action";
import { userExit } from "../autorisation/autorisation-actions";

const Header = (props) => {

    const { userActive, autorisationSaga, userExit } = props;

    return (
        <div
            className="flex justify-between items-center border bg-blue-500 w-11/12 my-5 min-h-100 rounded-md p-2 text-white font-bold mb:flex-wrap">
            <h2 className="mb:order-1">Header</h2>
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