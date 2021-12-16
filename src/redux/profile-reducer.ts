import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {PhotosType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'I will be React Developer!', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Bugaga', likesCount: 5},
        {id: 4, message: 'Dada', likesCount: 1}
    ] as Array<PostsType>,
    profile: {} as ProfileType,
    status: '',
    newPostText: ''
}

export type InitialStateProfileType = typeof initialState

export const profileReducer = (state = initialState, action: ProfileActionTypes): InitialStateProfileType => {
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
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

// Action creators
export const addPost = (newPostBody: string) => ({type: ADD_POST, newPostBody} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

//Thunks
export const getUserProfile = (userId: number | null) => async (dispatch: Dispatch<ProfileActionTypes>) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch<ProfileActionTypes>) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<ProfileActionTypes>) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch(error) {
        // todo: Maybe fix: error not seen here like in PS99. Or it is because new version.
        // Here possible to do dispatch. If we do catch here, than window.addEventListener at App does not work.
    }

}

export const savePhoto = (file: File) => async (dispatch: Dispatch<ProfileActionTypes>) => {
    let response = await profileAPI.savePhoto(file);

    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}

// todo: need to fix ts-ignore
export const saveProfile = (profile: ProfileType): AppThunk => async (dispatch, getState: () => AppRootStateType) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        const messageText = response.data.messages[0]
        const beginIndex = messageText.indexOf('>')
        const endIndex = messageText.indexOf(')')
        const fieldName = messageText.slice(beginIndex + 1,endIndex).toLowerCase()
        // @ts-ignore
        dispatch(stopSubmit('edit-profile', { 'contacts': {[fieldName]: messageText}} ))
        return Promise.reject(response.data.messages[0])
    }
}

export type ProfileActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>


export type ResponseFilePhotoType = {
    data: {
        photos: PhotosType
    }
    resultCode: number
    messages: Array<string>
}

type AppThunk = ThunkAction<void, AppRootStateType, unknown, ProfileActionTypes>

