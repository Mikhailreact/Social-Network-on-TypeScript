import React from 'react';
import s from './Posts.module.css'

const Posts = (props) => {

    console.log(props.massage);

    return (
        <div className={s.item}>
            <img src={"https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg"} alt={'Картинка'}/>
            {props.massage}
            <div>
                <span>Like</span> { props.likesCount }
            </div>


        </div>
    )
}

export default Posts;

