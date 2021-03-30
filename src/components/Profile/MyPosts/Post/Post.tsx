import React from 'react';
import s from './Post.module.css'

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src={process.env.PUBLIC_URL + '/img/ava.png'} alt=""/>
        <div className={s.text}>post 1</div>
      </div>
      <span>like</span>
    </div>
  )
}

export default Post;