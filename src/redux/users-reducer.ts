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
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
};

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionTypes): UsersPageType => {
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
    default:
      return state;
  }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
  type: 'SET-TOTAL-USERS-COUNT',
  count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

type UsersActionTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> |
ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
ReturnType<typeof toggleIsFetching>;