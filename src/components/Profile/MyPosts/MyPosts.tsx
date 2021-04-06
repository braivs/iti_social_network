import React from 'react';
import Post from "./Post/Post";
import s from './MyPost.module.css'

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div>
        <div className={s.posts}>
          <Post message='Hi, how are you' likesCount={1}/>
          <Post message="It's my first post" likesCount={5}/>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;