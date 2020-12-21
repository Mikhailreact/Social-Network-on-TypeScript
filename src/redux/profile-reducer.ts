import {ChangeEvent} from "react";
import {ActionsTypes, ProfilePageType, StateType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const;
export const updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value
}) as const;

const profileReducer = (state: ProfilePageType, action: ActionsTypes ) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}



export default profileReducer;