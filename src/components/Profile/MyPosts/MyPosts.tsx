import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css'
import {postsType} from '../../../types/entities';

type MyPostsPropsType = {
  updateNewPostText: (text: string) => void
  addPost: () => void
  posts: Array<postsType>
  newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    if (newPostElement.current) { // current - ссылается на нативный html элемент
      let text = newPostElement.current.value;
      props.updateNewPostText(text)
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder='Enter your post' onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
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