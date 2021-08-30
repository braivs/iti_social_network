import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({ //этот объект надо воспринимать как state
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
  })

export type AppRootStateType = ReturnType<typeof rootReducer>

// создаёт внутри себя state у которого есть 3 свойства выше
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

// все типы экшенов для всего app. Это пример был в видео по типизации thunk-ок, но пока решил так не делать
// export type AppActionsType = ProfileActionTypes | DialogsActionTypes | SidebarActionTypes | UsersActionTypes