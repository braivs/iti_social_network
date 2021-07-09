type AuthType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

const initialState: AuthType = {
  id: null,
  login: null,
  email: null,
  isAuth: false
};

export const authReducer = (state: AuthType = initialState, action: AuthActionTypes): AuthType => {
  switch (action.type) {
    case "SET-USER-DATA": {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    default:
      return state;
  }
}

export const setAuthUserData = (id: number, login: string, email: string) => ({type: 'SET-USER-DATA', data: {id, login, email}} as const)

type AuthActionTypes = ReturnType<typeof setAuthUserData>

