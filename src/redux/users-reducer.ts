import {ActionTypes} from '../types/entities';

type locationType = {
  city: string
  country: string
}

export type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: locationType
}

export type InitialStateType = {
  users: Array<UserType>
}

const initialState: InitialStateType = {
  users: []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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


