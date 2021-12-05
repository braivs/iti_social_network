import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
  })

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// непосредственно создаём store
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.__store__ = store

// определить автоматически тип всего объекта состояния
type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>