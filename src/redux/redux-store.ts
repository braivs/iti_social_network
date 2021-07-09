import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import {profileReducer} from "./profile-reducer";

const rootReducer = combineReducers({ //этот объект надо воспринимать как state
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
  })

export type AppStateType = ReturnType<typeof rootReducer>

// создаёт внутри себя state у которого есть 3 свойства выше
export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;