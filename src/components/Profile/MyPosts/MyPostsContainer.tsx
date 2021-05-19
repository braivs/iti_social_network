import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../../redux/redux-store';

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }
          let onPostChange = (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action)
          }

          return <MyPosts updateNewPostText={onPostChange}
                          addPost={addPost}
                          posts={state.profileReducer.posts}
                          newPostText={state.profileReducer.newPostText}/>
        }
      }
    </StoreContext.Consumer>
  )
}

type mapStateToPropsType = {

}

const mapStateToProps = (state: ReduxStateType):mapStateToPropsType => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

const MyPostsContainerSuper = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;