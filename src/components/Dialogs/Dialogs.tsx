import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';


type DialogItem = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItem> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Dimych"} id={1}/>
                <DialogItem name={"Andrey"} id={2}/>
                <DialogItem name={"Sveta"} id={3}/>
                <DialogItem name={"Sasha"} id={4}/>
                <DialogItem name={"Victor"} id={5}/>
                <DialogItem name={"Valera"} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your it-kamasutra"}/>
                <Message message={"YO"}/>
                <Message message={"Ваще круто работает!!!"}/>
                <Message message={"Yo"}/>

            </div>
        </div>
    )
}