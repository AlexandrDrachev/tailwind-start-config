export const initialPartner3State = {
    initialPartner3StateTest: "initialPartner3StateTest is ready!",
    messages: [
        // {
        //     messageId: 0,
        //     messageAuthorName: 'Mark',
        //     messageAuthorAvatar: "https://randomuser.me/api/portraits/men/96.jpg",
        //     messageText: 'In this article, ' +
        //     'I’ll show you the easiest way possible to create a chat application using React.js. ' +
        //     'It’ll be done entirely without server-side code, as we’ll let the Chatkit API handle the back-end.',
        //     date: '20 April 2020',
        //     time: '18:20',
        //     messageAddressId: null
        // },
        // {
        //     messageId: 1,
        //     messageAuthorName: 'John',
        //     messageAuthorAvatar: "https://randomuser.me/api/portraits/men/69.jpg",
        //     messageText: "I’m assuming that you know basic JavaScript and that you’ve encountered " +
        //     "a little bit of React.js before. Other than that, there are no prerequisites",
        //     date: '20 April 2020',
        //     time: '18:22',
        //     messageAddressId: null
        //
        // },
        // {
        //     messageId: 2,
        //     messageAuthorName: 'Camille',
        //     messageAuthorAvatar: "https://randomuser.me/api/portraits/women/14.jpg",
        //     messageText: "If you follow along with this tutorial you’ll " +
        //     "end up with your very own chat application at the end, " +
        //     "which you then can build further upon if you’d like to. Let’s get started!",
        //     date: '20 April 2020',
        //     time: '18:25',
        //     messageAddressId: null
        // }
    ],
    chats: [
        {
            chatId: 0,
            chatName: "General chat",
            chatAvatar: "",
            messages: [
                {
                    messageId: 1,
                    messageAuthorName: 'John',
                    messageAuthorAvatar: "https://randomuser.me/api/portraits/men/69.jpg",
                    messageText: "I’m assuming that you know basic JavaScript and that you’ve encountered " +
                        "a little bit of React.js before. Other than that, there are no prerequisites",
                    date: '20 April 2020',
                    time: '18:22',
                    messageAddressId: null

                },
                {
                    messageId: 2,
                    messageAuthorName: 'Camille',
                    messageAuthorAvatar: "https://randomuser.me/api/portraits/women/14.jpg",
                    messageText: "If you follow along with this tutorial you’ll " +
                    "end up with your very own chat application at the end, " +
                    "which you then can build further upon if you’d like to. Let’s get started!",
                    date: '20 April 2020',
                    time: '18:25',
                    messageAddressId: null
                }
            ]
        }
    ],
    // activeChat: {
    //     chatId: 0,
    //     chatName: "General chat",
    //     chatAvatar: "",
    //     messages: [
    //         {
    //             messageId: 2,
    //             messageAuthorName: 'Camille',
    //             messageAuthorAvatar: "https://randomuser.me/api/portraits/women/14.jpg",
    //             messageText: "If you follow along with this tutorial you’ll " +
    //             "end up with your very own chat application at the end, " +
    //             "which you then can build further upon if you’d like to. Let’s get started!",
    //             date: '20 April 2020',
    //             time: '18:25',
    //             messageAddressId: null
    //         }
    //     ]
    // }
    activeChat: null
};

export const partner3Reducer = (state, action) => {
    if (state === undefined) {
        return initialPartner3State;
    }
    switch (action.type) {
        case "GET_PARTNER3_STATE_TEST":
            return state;

        case "ADDED_NEW_MESSAGE_IN_STATE_SAGA":
            return {
                ...state,
                activeChat: {
                    ...state.activeChat,
                    messages: action.payload
                },
            };
        case "GET_ACTIVE_CHAT_SAGA":
            return {
                ...state,
                activeChat: action.payload
            };

        default:
            return state;
    }
};