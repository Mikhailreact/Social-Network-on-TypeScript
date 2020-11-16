import React from 'react';
import s from  './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {

    return (
        <div className={s.content}>
            <div>
                <img src={"https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"}/>
            </div>
            <div>Ava + description</div>
            <div>
                <MyPosts/>
            </div>
        </div>

    )
}

