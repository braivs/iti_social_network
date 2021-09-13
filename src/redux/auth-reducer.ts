import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

const initialState: AuthType = {
    id: null,
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

export const setAuthUserData = (id: string | null, login: string | null, email: string | null, isAuth: boolean) => ({
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


export const login = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: ThunkDispatch<AppRootStateType, unknown, AuthActionTypes | FormAction>) => {

        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }

export const logout = (): ThunkAction<void, AppRootStateType, unknown, AuthActionTypes> => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

type AuthType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type AuthActionTypes = ReturnType<typeof setAuthUserData>