import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

type InitialStateType = {
    initialized: boolean
    globalError: null | string
}
type AppActionTypes = ReturnType<typeof initializedSuccess>
type ThunkType = ThunkAction<void, AppRootStateType, unknown, AppActionTypes>

const initialState: InitialStateType = {
    initialized: false,
    globalError: null
};


export const appReducer = (state= initialState, action: AppActionTypes): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
    });
}