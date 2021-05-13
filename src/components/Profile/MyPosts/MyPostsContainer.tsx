import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {ActionTypes, postsType} from '../../../types/entities';
import MyPosts from './MyPosts';
import {reduxStoreType} from '../../../redux/redux-store';

type MyPostsPropsType = {
  store: reduxStoreType
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text: string) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action)
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost}
             posts={props.store.getState().profileReducer.posts}
             newPostText={props.store.getState().profileReducer.newPostText}
    />
  )
}

export default MyPostsContainer;