import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({ //этот объект надо воспринимать как state
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer
  })

// создаёт внутри себя state у которого есть 3 свойства выше
let store = createStore(reducers);

export type reduxStateType = ReturnType<typeof reducers>
export type reduxStoreType = typeof store

export default store;