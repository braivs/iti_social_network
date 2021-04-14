import React from 'react';
import Post from "./Post/Post";
import s from './MyPost.module.css'

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'I will be React Developer', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11}
  ]

  let postElements = postData.map( p => (<Post message={p.message} likesCount={p.likesCount} />))

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div>
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;