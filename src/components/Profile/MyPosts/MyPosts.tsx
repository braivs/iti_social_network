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
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default MyPosts;