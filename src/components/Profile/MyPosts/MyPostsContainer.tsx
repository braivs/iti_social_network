import {addPost, PostsType, updateNewPostText} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
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

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

export const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost })(MyPosts);