import {ChangeEvent} from "react";
import {ActionsTypes, ProfilePageType, StateType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const;
export const updateNewPostTextActionCreator = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: newText
}) as const;

const initialState: ProfilePageType = {
        posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 2, message: 'blabla', likesCount: 1100},
            {id: 2, message: 'dada', likesCount: 11},],
        newPostText: '',
    }

const profileReducer = (state = initialState, action: ActionsTypes ) => {
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