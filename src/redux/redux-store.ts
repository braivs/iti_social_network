import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({ //этот объект надо воспринимать как state
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
  })

// создаёт внутри себя state у которого есть 3 свойства выше
let store = createStore(reducers);

// @ts-ignore
window.store = store;

export type ReduxStateType = ReturnType<typeof reducers>

export default store;