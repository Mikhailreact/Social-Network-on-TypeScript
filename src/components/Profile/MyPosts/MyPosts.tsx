import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts= (props: MyPostsPropsType ) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}


/*const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Posts massage={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef(); //Через рефы обращаемся к value

window.state = state;

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </div>

    )
}

export default MyPosts;*/

