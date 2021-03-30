import React from 'react';
import s from './Post.module.css'

export type PostType = {
  message: string
  likesCount: number
}

const Post = (props:PostType) => {

  return (
    <div>
      <div className={s.item}>
        <img src={process.env.PUBLIC_URL + '/img/ava.png'} alt=""/>
        <div className={s.text}>{props.message}</div>
        <div className={s.likes}>Likes: {props.likesCount}</div>
      </div>
      <span>like</span>
    </div>
  )
}

export default Post;