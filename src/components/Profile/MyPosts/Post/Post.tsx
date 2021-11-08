import React from 'react';
import s from './Post.module.scss'
import ava from '../../../../assets/images/ava.png'
import like from '../../../../assets/images/like.png'

export type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src={ava} alt="" className={s.ava}/>
                <div>
                    <div className={s.text}>{props.message}</div>
                    <div className={s.likes}>Likes: {props.likesCount}</div>
                </div>
                <div><img src={like} alt="" className={s.like}/></div>
            </div>
        </div>
    )
}

export default Post;