import React from "react";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let addPosts = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator())
    }

    const updateNewPostText = (newText: string) => {
        //props.dispatch(updateNewPostTextActionCreator(e))
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        addPosts={addPosts}
        updateNewPostText={updateNewPostText}
    />
}





