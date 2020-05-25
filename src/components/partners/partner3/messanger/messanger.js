import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../bg-mask';
import ModalMessage from "../../../modal-message";
import { getNewMessageAction } from '../partner3-action';
import ServiceApi from '../../../../services/service-api';
import MessangerModalOptions from '../messanger-modal-options';

class Messanger extends Component {

    state = {
        message: {
            messageAuthorName: "",
            messageId: new Date().getMilliseconds() + Math.floor(Math.random() * 10000),
            messageAuthorAvatar: "",
            messageText: "",
            messageAddressId: null
        },
        isError: false,
        options: false
    };

    serviceApi = new ServiceApi();

    componentDidMount() {
        const node = this.node;
        node.scrollTop = 9999999 * 9999999;
    }

    componentDidUpdate() {
        const node = this.node;
        node.scrollTop = 9999999 * 9999999;
    }

    onHandleChange = (e) => {
        const { userActive } = this.props;
        return this.setState({
            message: {
                ...this.state.message,
                messageText: e.target.value,
                messageAuthorName: userActive.userName,
                messageId: this.state.message.messageId + 1,
                messageAuthorAvatar: userActive.userName !== "Quest" ? userActive.avatar : "",
                date: `${new Date().getDate()} ${this.serviceApi.getMonthTransform(new Date().getMonth())} ${new Date().getFullYear()}`,
                time: new Date().toLocaleTimeString()
                // time: `${new Date().getHours()}:${new Date().getMinutes()}`
            }
        });
    };

    onHandleSubmit = (e) => {
        const { userActive } = this.props;
        e.preventDefault();
        if (userActive.userName === "Quest") {
            return this.setState({
                message: {
                    messageAuthorName: "",
                    messageId: new Date().getMilliseconds() + Math.floor(Math.random() * 10000),
                    messageAuthorAvatar: "",
                    messageText: "",
                    messageAddressId: null
                },
                isError: true
            });
        }
        if (this.state.message.messageText === "") {
            return;
        }
        this.props.getNewMessageAction(this.state.message);
        return this.setState({
            message: {
                messageAuthorName: "",
                messageId: new Date().getMilliseconds() + Math.floor(Math.random() * 10000),
                messageAuthorAvatar: "",
                messageText: "",
                messageAddressId: null
            }
        });
    };

    onToggleError = () => {
        this.setState({isError: !this.state.isError});
    };

    onToggleOptions = (idx) => {
        this.setState({
            options: !this.state.options,
            indexMessage: idx
        });
    };

    onGetMessageAddressId = (idx) => {
        localStorage.setItem("indexMessage", idx);
        return this.setState({message: {
                ...this.state.message
            }});
    };

    renderMessages = () => {
        const { userActive, messages, activeChat } = this.props;

        const refs = activeChat ? activeChat.messages.reduce((acc, message) => {
            acc[message.messageId] = React.createRef();
            return acc;
        }, {}) : null;

        const onScrollToMessage = (id) => {
            return refs[id].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };

        return activeChat ? activeChat.messages.map((message, idx) => {

            const bckg = () => {
                if (idx % 2 !== 0) {
                    return `bg-gray-700`;
                } else {
                    return `bg-gray-800`;
                }
            };

            const messageAddress = messages.find((post) => post.messageId === message.messageAddressId);

            if (message.messageAuthorName === userActive.userName) {
                return (
                    <div
                        key={idx}
                        ref={refs[message.messageId]}
                        className="w-full flex justify-end">
                        <div className={`
                        bg-indigo-700 w-300 mb:w-200
                        flex flex-col justify-center items-end text-right rounded-tl-lg rounded-tr-lg rounded-bl-lg
                        my-1 border border-white`}>
                            {message.messageAddressId ?
                            <div
                                onClick={() => onScrollToMessage(message.messageAddressId)}
                                className="w-full p-2 bg-gray-900 rounded-t-lg">
                                <div className="w-full flex justify-start text-xs">
                                    <div>{messageAddress.messageAuthorName}&ensp;</div>
                                    <div>({messageAddress.date}, {messageAddress.time}),</div>
                                </div>
                            </div> : null}
                            <div className="z-20 p-1 text-base">
                                {message.messageText}
                            </div>
                            <div className="w-full p-1 mb-1 flex justify-end">
                                <div className="text-xs">{message.date}</div>
                                <div className="text-xs mx-1">{message.time}</div>
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <div
                    ref={refs[message.messageId]}
                    key={idx}
                    className="w-full flex justify-start items-center">
                    <div className={
                        `${bckg()} flex flex-col justify-center items-start text-left w-300 mb:w-200
                         rounded-tl-lg rounded-tr-lg rounded-br-lg my-1 border border-white`}>
                        {message.messageAddressId ? <div className="w-full p-2 bg-gray-900 rounded-t-lg">
                            <div
                                onClick={() => onScrollToMessage(message.messageAddressId)}
                                className="w-full flex justify-start text-xs">
                                <div>{messageAddress.messageAuthorName}&ensp;</div>
                                <div>({messageAddress.date}, {messageAddress.time}),</div>
                            </div>
                        </div> : null}
                        <div className="flex p-2 justify-end items-center">
                            <img
                                alt=""
                                src={message.messageAuthorAvatar}
                                onClick={() => this.onToggleOptions(idx)}
                                className="w-10 h-10 rounded-full" />
                            <div className="mx-2">{message.messageAuthorName}</div>
                        </div>
                        <div className="p-2">{message.messageText}</div>
                        <div className="w-full p-2 mt-1 flex justify-start">
                            <div className="text-xs">{message.date}</div>
                            <div className="text-xs mx-1">{message.time}</div>
                        </div>
                    </div>
                    <div className="relative flex h-10 w-20 flex-col justify-center items-center">
                        <div
                            className="
                            absolute z-20 text-xs font-bold p-1
                            hover:bg-blue-700 focus:bg-blue-700 cursor-pointer
                            flex flex-col justify-center items-center rounded bg-blue-600">
                            <div>answer</div>
                        </div>
                        <div
                            onClick={() => this.onGetMessageAddressId(idx)}
                            className="absolute w-full h-full z-30 left-0 top-0 right-0 bottom-0">

                        </div>
                    </div>
                </div>
            );
        }) : null;
    };

    render() {

        console.log('activeChat: ', this.props.activeChat);

        return (
            <div className="
            relative w-500 mb:w-300 p-2 my-2 h-400 border border-white
            rounded flex flex-col justify-center items-center text-white">
                <BgMask />
                <div
                    ref={(node) => this.node = node}
                    className="z-20 mb-1 h-full w-full text-white overflow-scroll">
                    {this.renderMessages()}
                </div>
                <form
                    onSubmit={(e) => this.onHandleSubmit(e)}
                    className="z-20 w-full flex justify-center items-center">
                    <textarea
                        placeholder="your message"
                        value={this.state.message.messageText}
                        onChange={(e) => this.onHandleChange(e)}
                        className="w-full px-1 rounded bg-gray-900 border border-white" />
                    <div className="w-16 flex justify-center">
                        <button
                            onClick={(e) => this.onHandleSubmit(e)}
                            className="z-20 ml-2 w-full bg-green-600 rounded cursor-pointer text-yellow-500">
                            &#10148;
                        </button>
                    </div>
                </form>
                {this.state.isError ?
                    <ModalMessage message="Get autorisation please!" action={this.onToggleError} /> : null}
                {this.state.options ?
                    <MessangerModalOptions
                        item1="answer"
                        item1Action={this.onToggleOptions}
                        item2="private message"
                        item2Action={this.onGetMessageAddressId}
                        item3="delete message"
                        item3Action={this.onToggleOptions}
                        item4="cancel"
                        item4Action={this.onToggleOptions} /> : null}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userActive: state.autorisationState.userActive,
        messages: state.partner3State.messages,
        chats: state.partner3State.chats,
        activeChat: state.partner3State.activeChat
    };
};

const mapDispatchToProps = {
    getNewMessageAction: getNewMessageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Messanger);