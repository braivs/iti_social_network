import mainImg from '../assets/images/main.jpg'
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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

type contactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

type photosType = {
  small: string
  large: string
}

export type profileType = null | {
  aboutMe: string
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: contactsType
  photos: photosType
}

export type ProfilePageType = {
  top: TopType
  posts: Array<PostsType>
  newPostText: string
  profile: profileType
  status: string
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
  profile: null,
  status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
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
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile}
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state;
  }
}

// Action creators and thunks:
export const addPost = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile: profileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: string) => {
  return (dispatch: Dispatch<ProfileActionTypes>) => {
    usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data))
    });
  }
}

export const getStatus = (userId: string) => {
  return (dispatch: Dispatch<ProfileActionTypes>) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data))
      });
  }
}

export const updateStatus = (status: string) => {
  return (dispatch: Dispatch<ProfileActionTypes>) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      });
  }
}

export const updateNewPostText = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
} as const)

export type ProfileActionTypes =
  ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof updateNewPostText>



