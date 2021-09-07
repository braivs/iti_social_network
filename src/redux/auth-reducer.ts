import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";

const initialState: AuthType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

export const authReducer = (state: AuthType = initialState, action: AuthActionTypes): AuthType => {
  switch (action.type) {
    case "SET-USER-DATA": {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
  type: 'SET-USER-DATA',
  payload: {id, login, email, isAuth}
} as const)


export const getAuthUserData = () => (dispatch: Dispatch<AuthActionTypes>) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
      }
    });
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    })
}

export const logout = (): ThunkType => (dispatch) => {
  authAPI.logout()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
      })
}

type AuthType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type AuthActionTypes = ReturnType<typeof setAuthUserData>
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AuthActionTypes>

