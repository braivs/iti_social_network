import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export type PostsType = {
  id: number
  message: string
  likesCount: number
}
type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
type PhotosType = {
  small: string | null
  large: string | null
}
export type ProfileType = {
  aboutMe: string
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

let initialState = {
  posts: [
    {id: 1, message: 'I will be React Developer!', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Bugaga', likesCount: 5},
    {id: 4, message: 'Dada', likesCount: 1}
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
}

export type InitialProfileStateType = typeof initialState

export const profileReducer = (state = initialState, action: ProfileActionTypes): InitialProfileStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsType = {
        id: new Date().getTime(),
        message: action.newPostBody,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
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
export const addPost = (newPostBody: string) => ({type: ADD_POST, newPostBody} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
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

export type ProfileActionTypes =
  ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>



