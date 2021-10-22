import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array of users ids
};

type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: UsersActionTypes): InitialStateType => {
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
    case 'SET-USERS': {
      return {...state, users: action.users}
    }
    case 'SET-CURRENT-PAGE': {
      return {...state, currentPage: action.currentPage}
    }
    case 'SET-TOTAL-USERS-COUNT': {
      return {...state, totalUsersCount: action.count}
    }
    case 'TOGGLE-IS-FETCHING': {
      return {...state, isFetching: action.isFetching}
    }
    case "TOGGLE-IS-FOLLOWING-PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)

      }
    default:
      return state;
  }
}

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
  type: 'SET-TOTAL-USERS-COUNT',
  count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
  isFetching,
  userId
} as const)

export const requestUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<UsersActionTypes>) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    });
  }
}

export const follow = (userId: number) => {
  return (dispatch: Dispatch<UsersActionTypes>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      });
  }
}

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch<UsersActionTypes>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      });
  }
}

export type UsersActionTypes = ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowingProgress>;