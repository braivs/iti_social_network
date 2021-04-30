import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css'
import {postsType} from '../../../redux/state';

type MyPostsPropsType = {
  posts: Array<postsType>
  addPost: () => void
  newPostText: string
  updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef<HTMLTextAreaElement>();
  let addPost = () => {
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
          <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
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