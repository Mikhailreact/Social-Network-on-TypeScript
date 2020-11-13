import React from 'react';
import s from './Posts.module.css'


const Like = (props) => {

    return (
        <div className={s.item}>
            <div>
                {props.Like}
            </div>


        </div>
    )
}

export default Like;

