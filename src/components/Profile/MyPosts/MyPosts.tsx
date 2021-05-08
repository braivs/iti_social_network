import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css'
import {ActionTypes, postsType} from '../../../redux/state';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
  posts: Array<postsType>
  newPostText: string
  dispatch: (action: ActionTypes) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef<HTMLTextAreaElement>();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    if (newPostElement.current) { // current - ссылается на нативный html элемент
      let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action)
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