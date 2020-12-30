import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, StoreType} from "../../../redux/store";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPosts: () => void
    updateNewPostText: (newText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likeCount={p.likesCount}/>);

    let onAddPost = () => {
        props.addPosts();
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.dispatch(updateNewPostTextActionCreator(e))
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Публиковать</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    )
}





