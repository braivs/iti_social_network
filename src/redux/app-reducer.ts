import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

type AuthType = {
    initialized: boolean
}
type AppActionTypes = ReturnType<typeof initializedSuccess>
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AppActionTypes>

const initialState: AuthType = {
    initialized: false,
};


export const appReducer = (state: AuthType = initialState, action: AppActionTypes): AuthType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)


export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    //dispatch(somethingselse())
    //dispatch(somethingelse())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
    });
}