import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    newPostText: string
    changeNewText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}/>);

    let addPosts = () => {
        props.addPost(props.newPostText)
        //props.addPost("")
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)

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
                    <button onClick={addPosts}>Публиковать</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    )
}





