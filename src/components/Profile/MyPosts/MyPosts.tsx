import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <div>
          <Post message='Hi, how are you' likesCount={1}/>
          <Post message="It's my first post" likesCount={5}/>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;