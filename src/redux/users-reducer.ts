import {ActionTypes} from '../types/entities';

type locationType = {
  city: string
  country: string
}

type photosType = {
  small: string
  large: string
}


export type UserType = {
  id: number
  photos: photosType
  followed: boolean
  name: string
  status: string
  location: locationType
}

export type UsersPageType = {
  users: Array<UserType>
}

const initialState: UsersPageType = {
  users: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionTypes): UsersPageType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case 'SET-USERS':
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)

export default usersReducer


