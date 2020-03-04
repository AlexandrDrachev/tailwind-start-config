import React from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { autorisationSaga } from "../../actions/action";

const Header = (props) => {

    const { users, autorisationSaga } = props;

    return (
        <div
            className="flex justify-between items-center border bg-blue-500 w-11/12 my-5 min-h-100 rounded-md p-2 text-white font-bold mb:flex-wrap">
            <h2 className="mb:order-1">Header</h2>
            <ul className="flex justify-center mb:order-3 mb:w-full">
                <Link to="/"><li>home</li></Link>
                <Link to="/history"><li className="mx-10">history</li></Link>
                <Link to="/statistic"><li>statistic</li></Link>
            </ul>
            <div className="mb:order-2">
                <span
                    className="cursor-pointer"
                    onClick={() => autorisationSaga()}>
                    {users[0].userName}
                </span>
                <img alt="" src="#"/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.autorisationState.users
    }
};

const mapDispatchToProps = {
    autorisationSaga: autorisationSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);