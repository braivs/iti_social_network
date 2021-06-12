import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {postsType} from '../../../types/entities';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
  posts: Array<postsType>
  newPostText: string
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

type mapDispatchToPropsType = {
  updateNewPostText:(text: string) => void
  addPost: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    updateNewPostText: (text: string) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;