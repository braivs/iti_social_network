import {ActionTypes} from '../types/entities';
import mainImg from '../assets/images/main.jpg'

export type TopType = {
  imgSrc: string
  imgAlt: string
  description: string
}
export type PostsType = {
  id: number
  message: string
  likesCount: number
}
export type ProfilePageType = {
  top: TopType
  posts: Array<PostsType>
  newPostText: string
  profile: any
}

let initialState: ProfilePageType = {
  top: {
    imgSrc: mainImg,
    imgAlt: '',
    description: 'ava + description'
  },
  posts: [
    {id: 1, message: 'I will be React Developer!', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Bugaga', likesCount: 5},
    {id: 4, message: 'Dada', likesCount: 1}
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
  switch (action.type) {
    case 'ADD-POST': {
      const newPost: PostsType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case 'UPDATE-NEW-POST-TEXT': {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case 'SET-USER-PROFILE': {
      // @ts-ignore
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
}

// Action Creators:
export const addPost = () => ({type: 'ADD-POST'} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)
export const updateNewPostText = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: text
} as const)

export default profileReducer


