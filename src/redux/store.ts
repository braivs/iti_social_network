import {InitialStateProfileType, ProfileActionTypes} from './profile-reducer';
import {DialogsActionTypes, InitialStateDialogsType} from './dialogs-reducer';
import {SidebarActionTypes, sidebarReducer, InitialStateSidebarType} from './sidebar-reducer';

type ActionTypes = ProfileActionTypes | DialogsActionTypes | SidebarActionTypes;

type stateType = {
  dialogsPage: InitialStateDialogsType
  profilePage: InitialStateProfileType
  sidebar: InitialStateSidebarType
}
export type StoreType = {
  _state: stateType
  _callSubscriber: () => void
  getState: () => stateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionTypes) => void
}
let store: StoreType = {
  _state : {
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Briws'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Lera'},
        {id: 4, name: 'Liza'},
        {id: 5, name: 'Diana'},
        {id: 6, name: 'Kristina'}
      ],
      messages: [
        {id: 1, message: 'Lorem ipsum dolor sit amet', avatar: 'img/ava.png'},
        {id: 2, message: 'Lorem ipsum dolor sit amet', avatar: 'img/ava.png'},
        {id: 3, message: 'Lorem ipsum dolor sit amet', avatar: 'img/ava.png'},
        {id: 4, message: 'Lorem ipsum dolor sit amet', avatar: 'img/ava.png'}
      ],
    },
    profilePage: {
      posts: [
        {id: 1, message: 'I will be React Developer!', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Bugaga', likesCount: 5},
        {id: 4, message: 'Dada', likesCount: 1}
      ],
      profile: null,
      status: '',
      newPostText: ''
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Liza', avatar: 'img/ava.png' },
        {id: 2, name: 'Masha', avatar: 'img/ava.png' },
        {id: 3, name: 'Diana', avatar: 'img/ava.png' }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state
  },
  subscribe(observer: () => void){
    this._callSubscriber = observer;
  },

  dispatch(action: ActionTypes) {
    // old functionality, maybe fix later
    // this._state.profilePage = profileReducer(this._state.profilePage, action);
    // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();
  }
}

// @ts-ignore
// window.store = store;

export default store;


