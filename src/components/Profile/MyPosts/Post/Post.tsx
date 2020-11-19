import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType ) => {
    return (
        <div className={s.item}>
            <img src={"https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg"} alt={'Каринка'}/>
            <div className={s.message}>{ props.message }</div>
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}


