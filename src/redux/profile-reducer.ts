import {ActionTypes, postsType, profilePageType} from '../types/entities';

/*type ProfileActionType=
  ReturnType<typeof addPostActionCreator> |
  ReturnType<typeof updateNewPostTextActionCreator>*/

let initialState: profilePageType = {
  top: {
    imgSrc: 'img/main.jpg',
    imgAlt: '',
    description: 'ava + description'
  },
  posts: [
    {id: 1, message: 'I will be React Developer!', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Bugaga', likesCount: 5},
    {id: 4, message: 'Dada', likesCount: 1}
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action: ActionTypes): profilePageType => {
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
export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: text
} as const)

export default profileReducer


