import React from "react";
import {ActionsTypes, DialogsPageType, StoreType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

/*type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}*/

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;


            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs
                sendMessage={onSendMessageClick}
                state={state}
                updateNewMessageBody={onNewMessageChange}
            />
        }
    }

    </StoreContext.Consumer>
}

