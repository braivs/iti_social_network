import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({ //этот объект надо воспринимать как state
    // вот тут похоже ошибка надо profileReducer->profilePage и прочие
    profileReducer: profileReducer, // profileReducer->profilePage
    dialogsReducer: dialogsReducer, // dialogsReducer -> dialogsPage
    sidebarReducer: sidebarReducer, // ->sidebar
    usersPage: usersReducer
  })

// создаёт внутри себя state у которого есть 3 свойства выше
let store = createStore(reducers);

// @ts-ignore
window.store = store;

export type ReduxStateType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store

export default store;