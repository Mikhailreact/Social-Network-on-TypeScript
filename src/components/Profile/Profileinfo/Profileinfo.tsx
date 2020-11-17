import React from 'react';
import s from './Profileinfo.module.css'



export const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img src={"https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"} alt={'Картинка'}/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>

    )
}

