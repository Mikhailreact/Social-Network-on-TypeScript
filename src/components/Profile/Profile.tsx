import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import { PostType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    newPostText: string
    changeNewText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     changeNewText={props.changeNewText}
            />
        </div>

    )
}

/*
changePostText={changePostText}*/
