import {sendMessageCreator, updateNewMessageAuthorCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/profile-reducer';
import {followAC, setUsersAC, unfollowAC} from '../redux/users-reducer';

type dialogsType = {
  id: number
  name: string
}
export type messagesType = {
  id: number
  message: string
  author: string
  avatar: string
}
export type dialogsPageType = {
  dialogs: Array<dialogsType>
  messages: Array<messagesType>
  newMessageAuthor: string
  newMessageBody: string
}
export type topType = {
  imgSrc: string
  imgAlt: string
  description: string
}
export type postsType = {
  id: number
  message: string
  likesCount: number
}
export type profilePageType = {
  top: topType
  posts: Array<postsType>
  newPostText: string
}
type friendsType = {
  id: number
  name: string,
  avatar: string
}
export type sidebarType = {
  friends: Array<friendsType>
}

type locationType = {
  city: string
  country: string
}
export type usersType = {
  id: number
  followed: boolean
  name: string
  status: string
  location: locationType
}
export type usersPageType = {
  users: Array<usersType>
}


//Autocreated types from Action Creators:
export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageAuthorCreator> |
  ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |
  ReturnType<typeof setUsersAC>;