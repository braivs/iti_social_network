import {ActionTypes, usersPageType, usersType} from '../types/entities';

let initialState: usersPageType = {
  users: [
    {id: 1, followed: false, name: 'Dmitry', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2, followed: true, name: 'Sasha', status: 'I am boss too', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, followed: false, name: 'Andrew', status: 'I am boss too', location: {city: 'Kiew', country: 'Ukraine'}}
  ]
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


