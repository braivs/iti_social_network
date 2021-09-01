import {addPost, PostsType, updateNewPostText} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {Dispatch} from "redux";

type MapStatePropsType = {
  posts: Array<PostsType>
}

type MapDispatchPropsType = {
  addPost: (newPostBody: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (newPostBody: string) => {
      dispatch(addPost(newPostBody))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);