import React from "react";
import s from './Post.module.css'

type PostType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src={"https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg"} alt={'Каринка'}/>
            <div className={s.message}>{ props.message }</div>
            <div>
                <span>Like {props.likeCount}</span>
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

