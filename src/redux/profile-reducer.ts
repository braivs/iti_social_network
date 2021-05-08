import {ActionTypes, postsType, profilePageType} from './state';

const profileReducer = (state: profilePageType, action: ActionTypes): profilePageType => {

  switch (action.type) {
    case 'ADD-POST':
      const newPost: postsType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

// Action Creators:
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (text: string) => (
  {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
)

export default profileReducer;
