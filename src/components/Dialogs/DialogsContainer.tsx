import React from "react";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.state

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs sendMessage={onSendMessageClick}
                    state={state}
                    updateNewMessageBody={onNewMessageChange}
    />
}

