import React, { Component } from 'react';

import UsersList from './users-list';
import Messanger from './messanger';
import ChatList from './chat-list';

class Partner3 extends Component {

    state = {
        chatList: false,
        fastAutorisation: false
    };

    onGetChatList = () => {
        this.setState({ chatList: !this.state.chatList });
    };

    onGetFastAutorisation = () => {
        this.setState({ fastAutorisation: !this.state.fastAutorisation });
    };

    render() {
        return (
            <div className="w-400 mb:w-300 flex flex-col justify-center items-center">
                <div className="w-full flex justify-center items-center">
                    <div
                        onClick={() => this.onGetChatList()}
                        className="
                        p-1 mx-1 text-xs bg-green-600 rounded cursor-pointer border border-white font-bold text-white">
                        chat list
                    </div>
                    <div
                        onClick={() => this.onGetFastAutorisation()}
                        className="
                        p-1 mx-1 text-xs bg-red-600 rounded cursor-pointer border border-white font-bold text-white">
                        fast autorisation
                    </div>
                </div>
                { this.state.fastAutorisation ? <UsersList /> : null }
                { this.state.chatList ? <ChatList /> : <Messanger /> }
            </div>
        );
    };
}

export default Partner3;