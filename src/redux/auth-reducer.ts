import {Dispatch} from "redux";
import {authAPI, ResultCodesEnum} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

type AuthActionTypes = ReturnType<typeof setAuthUserData>
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AuthActionTypes | FormAction>

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
};

type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action: AuthActionTypes): InitialStateType => {
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
    return authAPI.me()
        .then(meData => {
            if (meData.resultCode === ResultCodesEnum.Success) {
                let {id, login, email} = meData.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        });
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
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