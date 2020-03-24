import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addedNewUserInStateAction, getAutorisationAction,
    getRegistration, userExit, userExitSaga, autorisationQuestAction } from "./autorisation-actions";

class Autorisation extends Component {

    state = {
        userName: "",
        userNameReg: "",
        password: "",
        passwordReg: "",
        repeatPassword: ""
    };

    autorisationObj = {};

    onSubmit = (e) => {
        console.log('onsubmit!!!!!!!!!!!!!');
        e.preventDefault();
        return this.setState({
            userName: "",
            password: "",
            repeatPassword: "",
            userNameReg: "",
            passwordReg: ""
        });
    };

    onChangeLogin = (e) => {
        if (!this.props.autorisation && !this.props.registration) {
            this.setState({
                userName: e.target.value
            });
        }
        if (this.props.registration && !this.props.autorisation) {
            this.setState({
                userNameReg: e.target.value
            });
        }
    };

    onChangePassword = (e) => {
        if (!this.props.autorisation && !this.props.registration) {
            this.setState({
                password: e.target.value
            });
        }
        if (this.props.registration && !this.props.autorisation) {
            this.setState({
                passwordReg: e.target.value
            });
        }
    };

    onChangeRepeatPassword = (e) => {
        this.setState({
            repeatPassword: e.target.value
        });
    };

    getLogin = () => {
        console.log('state: ', this.state);
        this.autorisationObj.userName = this.state.userName;
        this.autorisationObj.userNameReg = this.state.userNameReg;
        this.autorisationObj.password = this.state.password;
        this.autorisationObj.passwordReg = this.state.passwordReg;
        this.autorisationObj.repeatPassword = this.state.repeatPassword;
        this.autorisationObj.autorisation = this.props.autorisation;
        this.autorisationObj.registration = this.props.registration;
        if (!this.props.autorisation && !this.props.registration) {
            return this.props.getAutorisationAction(this.autorisationObj);
        }
        if (this.props.registration && !this.props.autorisation) {
            return this.props.addedNewUsersInStateAction(this.autorisationObj);
        }
    };

    render() {

        console.log('autorisation:', this.props.autorisation);
        console.log('registration: ', this.props.registration);
        console.log('users: ', this.props.users);
        return (
            <div className="flex justify-center p-2">
                <div className="
                flex flex-col justify-center items-center
                w-500 h-300 mb:w-300 mb:h-300 border bg-white rounded-md">
                    <div className="m-2 flex flex-col items-center">
                        <form
                            onSubmit={(e) => this.onSubmit(e)}>
                            <div className="flex flex-col items-center">
                                {
                                    !this.props.registration && !this.props.autorisation ?
                                    <input
                                        value={this.state.userName}
                                        onChange={(e) => this.onChangeLogin(e)}
                                        className="bg-gray-300 m-3 rounded border border-gray-400"
                                        type="text"
                                        placeholder={"login - Admin"}/> :
                                    <input
                                        value={this.state.userNameReg}
                                        onChange={(e) => this.onChangeLogin(e)}
                                        className="bg-gray-300 m-3 rounded border border-gray-400"
                                        type="text"
                                        placeholder={"login"}/>
                                }
                                {
                                    !this.props.registration && !this.props.autorisation ?
                                    <input
                                        value={this.state.password}
                                        onChange={(e) => this.onChangePassword(e)}
                                        className="bg-gray-300 rounded border border-gray-400"
                                        type="password"
                                        placeholder={"password - 123456"}/> :
                                    <input
                                        value={this.state.passwordReg}
                                        onChange={(e) => this.onChangePassword(e)}
                                        className="bg-gray-300 rounded border border-gray-400"
                                        type="password"
                                        placeholder={"password"}/>
                                }
                                {
                                    this.props.registration && !this.props.autorisation ?
                                    <input
                                        value={this.state.repeatPassword}
                                        onChange={(e) => this.onChangeRepeatPassword(e)}
                                        className="mt-3 bg-gray-300 rounded border border-gray-400"
                                        type="password"
                                        placeholder="repeat password"/> : null }
                                <div className="w-full">
                                    <label className="ml-10 my-4 flex items-center justify-start">
                                        <input
                                            className="bg-gray-200 mr-2"
                                            type="checkbox"/>
                                        Save me
                                    </label>
                                </div>
                            </div>
                            {
                                !this.props.registration && !this.props.autorisation ?
                                <div className="m-2 flex flex-wrap justify-center items-center">
                                    <div
                                        onClick={() => this.props.getRegistration()}
                                        className="
                                        mx-2 px-1 py-1 border-2 border-gray-500 bg-blue-500
                                        rounded text-white font-bold hover:bg-blue-600">Registration</div>
                                    <button
                                        onClick={() => this.getLogin()}
                                        className="
                                        mx-2 px-1 py-1 border-2 border-gray-500 bg-green-500
                                        rounded text-white font-bold hover:bg-green-600">Autorisation</button>
                                    <div
                                        onClick={() => this.props.autorisationQuestAction()}
                                        className="
                                        m-2 px-1 py-1 border-2 border-gray-500 bg-yellow-500
                                        rounded text-blue-700 font-bold hover:bg-yellow-600">I'm a guest</div>
                                </div> :
                                <div className="m-2 flex flex-wrap justify-center items-center">
                                    <button
                                        onClick={() => this.getLogin()}
                                        className="
                                        mx-2 px-1 py-1 border-2 border-gray-500 bg-blue-500
                                        rounded text-white font-bold hover:bg-blue-600">Registration</button>
                                    <div
                                        onClick={() => this.props.userExit()}
                                        className="
                                        mx-2 px-1 py-1 border-2 border-gray-500 bg-green-500
                                        rounded text-white font-bold hover:bg-green-600">Autorisation</div>
                                    <div
                                        onClick={() => this.props.autorisationQuestAction()}
                                        className="
                                        m-2 px-1 py-1 border-2 border-gray-500 bg-yellow-500
                                        rounded text-blue-700 font-bold hover:bg-yellow-600">I'm a guest</div>
                            </div> }
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        autorisation: state.autorisationState.autorisation,
        registration: state.autorisationState.registration,
        users: state.autorisationState.users
    };
};

const mapDispatchToProps = {
    getAutorisationAction: getAutorisationAction,
    getRegistration: getRegistration,
    userExit: userExit,
    userExitSaga: userExitSaga,
    addedNewUsersInStateAction: addedNewUserInStateAction,
    autorisationQuestAction: autorisationQuestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Autorisation);