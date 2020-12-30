import React from "react";
import {ActionsTypes, ProfilePageType, StateType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

/*type MyPostsPropsType = {
    //state: ProfilePageType
    //dispatch: (action: ActionsTypes) => void
    store: StoreType
}*/

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPosts = () => {
                    //props.addPost();
                    store.dispatch(addPostActionCreator())
                }

                const updateNewPostText = (newText: string) => {
                    //props.dispatch(updateNewPostTextActionCreator(e))
                    store.dispatch(updateNewPostTextActionCreator(newText))
                }
                return <MyPosts
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPosts={addPosts}
                    updateNewPostText={updateNewPostText}
                />
            }
            }
        </StoreContext.Consumer>
    )
}





