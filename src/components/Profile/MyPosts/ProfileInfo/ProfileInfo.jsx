import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img alt="Картинка!" src="https://www.iexpats.com/wp-content/uploads/2017/11/paradise-island.jpg"/>
            </div>

            <div className={s.descriptionBlock}>
                Ava + description
            </div>

        </div>

    )
}

export default ProfileInfo;