import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../bg-mask';
import { getActiveChatAction } from '../partner3-action';

class ChatList extends Component {

    renderChatList = () => {
        const { chats } = this.props;
        return chats.map((chat, idx) => {
            return (
                <div
                    key={idx}
                    onClick={() => this.props.getActiveChatAction(chat.chatId)}
                    className=
                        "w-full p-1 flex justify-start items-center bg-gray-600">
                    {chat.chatName === "General chat" ?
                        <div className="w-10 h-10 mr-2 border border-gray-900 rounded-full">

                        </div> : null}
                    <div>{chat.chatName}</div>
                </div>
            );
        });
    };

    render() {

        return (
            <div
                className="
                relative w-full flex flex-col justify-start items-center my-1 border border-white rounded p-1">
                <div
                    className="
                    z-20 text-white flex justify-center items-center w-full">
                    <div className="w-full flex flex-col justify-center items-center">
                        Chat List
                        {this.renderChatList()}
                    </div>
                </div>
                <BgMask />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        chats: state.partner3State.chats
    };
};

const mapDispatchToProps = {
    getActiveChatAction: getActiveChatAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);