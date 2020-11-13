import React from 'react';
import s from  './Profile.module.css'

export const Profile = () => {

    return (
        <div className={s.content}>
            <div>
                <img src={"https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"}/>
            </div>
            <div>Ava + description</div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                    <div className={s.item}>Post 3</div>
                    <div className={s.item}>Post 4</div>
                </div>
            </div>
        </div>

    )
}

