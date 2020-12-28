import {ActionsTypes, DialogsPageType} from "./store";
import {ChangeEvent} from "react";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'}) as const;
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body}) as const;

const initialState: DialogsPageType = {
        dialogs: [{id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'},
        ],
        newMessageBody: ""
    }

const dialogsReducer  = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}



export default dialogsReducer;