import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    state: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.state.messages.map(message => <Message message={message.message}/>);
    const newMessageBody = props.state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        //props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

