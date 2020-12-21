import {ActionsTypes, DialogsPageType} from "./state";
import {ChangeEvent} from "react";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'}) as const;

export const updateNewMessageBodyCreator = (e: ChangeEvent<HTMLTextAreaElement>) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', body: e.currentTarget.value}) as const;


const dialogsReducer  = (state: DialogsPageType, action: ActionsTypes) => {

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