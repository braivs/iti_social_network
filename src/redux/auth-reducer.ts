type AuthType = {
  id: 15049 | null
  login: string | null
  email: string | null
}

const initialState: AuthType = {
  id: null,
  login: null,
  email: null
};

export const authReducer = (state: AuthType = initialState, action: AuthActionTypes): AuthType => {
  switch (action.type) {
    case "SET-USER-DATA": {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

export const setUserData = (id: number, login: string, email: string) => ({type: 'SET-USER-DATA', data: {id, login, email}} as const)

type AuthActionTypes = ReturnType<typeof setUserData>


