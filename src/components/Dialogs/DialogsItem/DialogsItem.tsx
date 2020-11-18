import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';


type DialogItem = {
    name: string
    id: number
};

export const DialogItem: React.FC<DialogItem> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};



