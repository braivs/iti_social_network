import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

type MyPostsPropsType = {
  // store: ReduxStoreType
}

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

export default MyPostsContainer;