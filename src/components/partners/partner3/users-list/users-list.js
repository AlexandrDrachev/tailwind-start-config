import React, { Component } from 'react';

import { connect } from "react-redux";
import BgMask from '../../../bg-mask';
import { getAutorisationAction, userExit } from '../../../autorisation/autorisation-actions';
import { getPartner3StateTest } from '../partner3-action';

class UsersList extends Component {

    getFastAutorisation = (user) => {
        this.props.userExit();
        this.props.getAutorisationAction(user);
    };

    getAvatar = (name) => {
        return (
            <div className="
            w-20 h-20 mb:w-10 mb:h-10 rounded-full text-2xl
            bg-red-500 flex justify-center items-center">
                {name[0]}
            </div>
        );
    };

    render() {

        const { users, getPartner3StateTest } = this.props;

        return (
            <div>
                <div className="
                relative w-full p-2 mt-2 flex flex-col text-white
                justify-center items-center border border-white rounded">
                    <div
                        onClick={() => getPartner3StateTest()}
                        className="z-20">
                        Fast Authorization
                    </div>
                    <div className="z-20 w-full flex justify-around flex-wrap">
                        {users.map((user) => {
                            return (
                                <div
                                    onClick={() => this.getFastAutorisation(user)}
                                    key={user.id}
                                    className="mx-1 mb:my-1 mb:text-sm flex flex-col justify-center items-center cursor-pointer">
                                    {user.avatar === "" ? this.getAvatar(user.userName) : <img
                                        className="w-20 h-20 mb:w-10 mb:h-10 rounded-full text-2xl
                                        bg-red-500 flex justify-center items-center"
                                        alt=""
                                        src={user.avatar} />}
                                    <div>
                                        {user.userName}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <BgMask />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.autorisationState.users
    };
};

const mapDispatchToProps = {
    getAutorisationAction: getAutorisationAction,
    userExit: userExit,
    getPartner3StateTest: getPartner3StateTest
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);