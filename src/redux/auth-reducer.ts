import {Dispatch} from "redux";
import {authAPI, ResultCodesEnum, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as null | string, // if null, then captcha is not required
};

type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action: AuthActionTypes): InitialStateType => {
    switch (action.type) {
        case "bright-net/auth/GET_CAPTCHA_URL_SUCCESS":
        case 'bright-net/auth/SET-USER-DATA':
        {
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
    type: 'bright-net/auth/SET-USER-DATA', payload: {id, login, email, isAuth}
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'bright-net/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
} as const)

export const getAuthUserData = () => async (dispatch: Dispatch<AuthActionTypes>) => {
    let response = await authAPI.me();
    // success, get auth data
    if (response.data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    }  else {
        if (response.data.resultCode === ResultCodesEnum.CaptchaRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

type AuthActionTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AuthActionTypes | FormAction>