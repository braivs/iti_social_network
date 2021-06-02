import {ActionTypes, usersPageType, usersType} from '../types/entities';
import defaultAva from '../img/ava_orange.png'

let initialState: usersPageType = {
  users: [ ]
}

const usersReducer = (state = initialState, action: ActionTypes): usersPageType => {
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
export const setUsersAC = (users: Array<usersType>) => ({type: 'SET-USERS', users} as const)

export default usersReducer


