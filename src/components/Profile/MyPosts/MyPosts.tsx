import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType, ProfilePageType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.state.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likeCount={p.likesCount}/>);

    let addPosts = () => {
        props.dispatch(addPostActionCreator())

    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e))

    }

    return (
        <div className={s.postsBock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}
                              value={props.state.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPosts}>Публиковать</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    )
}





