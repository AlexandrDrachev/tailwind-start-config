import React, { Component } from 'react';

import List from './test-scroll/test-scroll';

class Partner2 extends Component {

    state = {
        home: true,
        events: false,
        wishlist: false,
        friends: false,
        stores: false,
        blogs: false,
    };

    onToggleHome = () => {

        if (!this.state.home) {
            return this.setState({
                home: !this.state.home,
                events: false,
                wishlist: false,
                friends: false,
                stores: false,
                blogs: false,
            });
        }
    };

    onToggleEvents = () => {

        if (!this.state.events) {
            return this.setState({
                home: false,
                events: !this.state.events,
                wishlist: false,
                friends: false,
                stores: false,
                blogs: false,
            });
        }
    };

    onToggleWishlist = () => {

        if (!this.state.wishlist) {
            return this.setState({
                home: false,
                events: false,
                wishlist: !this.state.wishlist,
                friends: false,
                stores: false,
                blogs: false,
            });
        }
    };

    onToggleFriends = () => {

        if (!this.state.friends) {
            return this.setState({
                home: false,
                events: false,
                wishlist: false,
                friends: !this.state.friends,
                stores: false,
                blogs: false,
            });
        }
    };

    onToggleStores = () => {

        if (!this.state.stores) {
            return this.setState({
                home: false,
                events: false,
                wishlist: false,
                friends: false,
                stores: !this.state.stores,
                blogs: false,
            });
        }
    };

    onToggleBlogs = () => {

        if (!this.state.blogs) {
            return this.setState({
                home: false,
                events: false,
                wishlist: false,
                friends: false,
                stores: false,
                blogs: !this.state.blogs,
            });
        }
    };

    render() {

        const { home, events, wishlist, friends, stores, blogs } = this.state;

        return (
            <div>
                <div
                    className={`
                flex flex-col justify-center items-center w-350 h-500 bg-white`}>
                    TEST HTML/CSS COMPONENT
                    <div
                        className={`
                    flex flex-col items-center justify-center bg-red-600 w-290 text-white`}>
                        <div
                            className={`
                        relative w-300 h-40p flex`}>
                            <div
                                className={`
                            p-2 w-96 absolute left-0 top-0 right-0 bottom-0 font-bold`}>
                                Logo
                            </div>
                            <div
                                className={`
                            ${home ? `rounded-br-lg bg-white text-gray-600` : null}
                            absolute p-2 left-96 top-0 right-0 bottom-0 w-204 rounded-tr-lg bg-red-600 `}>
                            </div>
                        </div>
                        <div
                            className={`
                        relative w-300 h-40p`}>
                            <div
                                onClick={() => this.onToggleHome()}
                                className={`
                            ${!home ? `bg-red-600` : `rounded-l-full bg-white text-red-600 font-bold`}
                            ${events ? `rounded-br-lg` : null}
                            absolute p-2 left-24 top-0 right-0 bottom-0 w-204 cursor-pointer`}>
                                Home
                            </div>
                        </div>
                        <div
                            className={`
                        relative w-300 h-40p`}>
                            <div
                                onClick={() => this.onToggleEvents()}
                                className={`
                            ${home ? `rounded-tr-lg` : null}
                            ${wishlist ? `rounded-br-lg` : null}
                            ${!events ? `bg-red-600` : `rounded-l-full bg-white text-red-600 font-bold`}
                            absolute p-2 left-24 top-0 right-0 bottom-0 w-204 cursor-pointer`}>
                                Events
                            </div>
                        </div>
                        <div
                            className={`
                        relative w-300 h-40p`}>
                            <div
                                onClick={() => this.onToggleWishlist()}
                                className={`
                            ${events ? `rounded-tr-lg` : null}
                            ${friends ? `rounded-br-lg` : null}
                            ${!wishlist ? `bg-red-600` : `rounded-l-full bg-white text-red-600 font-bold`}
                            absolute p-2 left-24 top-0 right-0 bottom-0 w-204 cursor-pointer`}>
                                Wishlist
                            </div>
                        </div>
                        <div
                            className={`
                        relative w-300 h-40p`}>
                            <div
                                onClick={() => this.onToggleFriends()}
                                className={`
                            ${wishlist ? `rounded-tr-lg` : null}
                            ${stores ? `rounded-br-lg` : null}
                            ${!friends ? `bg-red-600` : `rounded-l-full bg-white text-red-600 font-bold`}
                            absolute p-2 left-24 top-0 right-0 bottom-0 w-204 cursor-pointer`}>
                                Friends
                            </div>
                        </div>
                        <div
                            className={`
                        relative w-300 h-40p`}>
                            <div
                                onClick={() => this.onToggleStores()}
                                className={`
                            ${friends ? `rounded-tr-lg` : null}
                            ${blogs ? `rounded-br-lg` : null}
                            ${!stores ? `bg-red-600` : `rounded-l-full bg-white text-red-600 font-bold`}
                            absolute p-2 left-24 top-0 right-0 bottom-0 w-204 cursor-pointer`}>
                                Stores
                            </div>
                        </div>
                        <div
                            className={`
                        relative w-300 h-40p`}>
                            <div
                                onClick={() => this.onToggleBlogs()}
                                className={`
                            ${stores ? `rounded-tr-lg` : null}
                            ${!blogs ? `bg-red-600` : `rounded-l-full bg-white text-red-600 font-bold`}
                            absolute p-2 left-24 top-0 right-0 bottom-0 w-204 cursor-pointer`}>
                                Blogs
                            </div>
                        </div>
                        <div
                            className={`
                        relative w-300 h-40p flex`}>
                            <div
                                className={`
                            p-2 w-96 absolute left-0 top-0 right-0 bottom-0 font-bold`}>
                                Footer
                            </div>
                            <div
                                className={`
                            bg-red-600 ${blogs ? `rounded-tr-lg bg-white text-gray-600` : null}
                            absolute p-2 left-96 top-0 right-0 bottom-0 w-204 rounded-br-lg`}>
                            </div>
                        </div>
                    </div>
                </div>
                <List />
            </div>
        );
    };
}

export default Partner2;