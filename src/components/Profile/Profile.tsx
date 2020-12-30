import React from 'react';
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    //state: ProfilePageType
    //dispatch: (action: ActionsTypes) => void
}

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                /*state={props.state}
                     dispatch={props.dispatch}*/
            />
        </div>

    )
}

