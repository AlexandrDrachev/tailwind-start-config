export const initialPartner3State = {
    initialPartner3StateTest: "initialPartner3StateTest is ready!",
    messages: [
        {
            messageId: null,
            messageAuthorName: 'string userName',
            messageAuthorAvatar: 'string link',
            messageText: 'string'
        }
    ],
    answers: [
        {
            answerId: null,
            answerAuthorName: 'string userName',
            answerAuthorAvatar: 'string link',
            answerText: 'string',
            answerAddressMessage: 'message id'
        }
    ]
};

export const partner3Reducer = (state, action) => {
    if (state === undefined) {
        return initialPartner3State;
    }
    switch (action.type) {
        case "GET_PARTNER3_STATE_TEST":
            return state;
    }
};