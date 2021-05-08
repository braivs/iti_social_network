import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {
  sendMessageCreator,
  updateNewMessageAuthorCreator,
  updateNewMessageBodyCreator
} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

type dialogsType = {
  id: number
  name: string
}
export type messagesType = {
  id: number
  message: string
  author: string
  avatar: string
}
export type dialogsPageType = {
  dialogs: Array<dialogsType>
  messages: Array<messagesType>
  newMessageAuthor: string
  newMessageBody: string
}
export type topType = {
  imgSrc: string
  imgAlt: string
  description: string
}
export type postsType = {
  id: number
  message: string
  likesCount: number
}
export type profilePageType = {
  top: topType
  posts: Array<postsType>
  newPostText: string
}
type friendsType = {
  name: string,
  avatar: string
}
export type sidebarType = {
  friends: Array<friendsType>
}
export type stateType = {
  dialogsPage: dialogsPageType
  profilePage: profilePageType
  sidebar: sidebarType
}

//Autocreated types from Action Creators:
export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageAuthorCreator> |
  ReturnType<typeof updateNewMessageBodyCreator>;

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
        {id: 1, message: 'Lorem ipsum dolor sit amet', author: 'Masha', avatar: 'img/ava.png'},
        {id: 2, message: 'Lorem ipsum dolor sit amet', author: 'Briws', avatar: 'img/ava.png'},
        {id: 3, message: 'Lorem ipsum dolor sit amet', author: 'Lera', avatar: 'img/ava.png'},
        {id: 4, message: 'Lorem ipsum dolor sit amet', author: 'Liza', avatar: 'img/ava.png'}
      ],
      newMessageAuthor: '',
      newMessageBody: ''
    },
    profilePage: {
      top: {
        imgSrc: 'img/main.jpg',
        imgAlt: '',
        description: 'ava + description'
      },
      posts: [
        {id: 1, message: 'I will be React Developer!', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Bugaga', likesCount: 5},
        {id: 4, message: 'Dada', likesCount: 1}
      ],
      newPostText: ''
    },
    sidebar: {
      friends: [
        { name: 'Liza', avatar: 'img/ava.png' },
        { name: 'Masha', avatar: 'img/ava.png' },
        { name: 'Diana', avatar: 'img/ava.png' }
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();
  }
}

// @ts-ignore
window.store = store;

export default store;


