import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {MyPosts} from './MyPosts';

type MapStatePropsType = {
  posts: Array<PostsType>
  newPostText: string
}

type MapDispatchPropsType = {
  updateNewPostText:(text: string) => void
  addPost: () => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);