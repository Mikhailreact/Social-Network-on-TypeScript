import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {ActionsTypes, PostType, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     dispatch={props.dispatch}

            />
        </div>

    )
}

/*
changePostText={changePostText}*/
