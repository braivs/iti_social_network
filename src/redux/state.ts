type dialogsType = {
  id: number
  name: string
}
type messagesType = {
  id: number
  message: string
  author: string
  avatar: string
}
export type dialogsPageType = {
  dialogs: Array<dialogsType>
  messages: Array<messagesType>
  newMessageAuthor: string
  newMessageText: string
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

export let state: stateType = {
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
    newMessageAuthor: 'Briws',
    newMessageText: 'Hellooo'
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
    newPostText: 'briws.ru'
  },
  sidebar: {
    friends: [
      { name: 'Liza', avatar: 'img/ava.png' },
      { name: 'Masha', avatar: 'img/ava.png' },
      { name: 'Diana', avatar: 'img/ava.png' }
    ]
  }
}

export type StoreType = {
  _state: stateType
  getState: () => stateType
  addPost: () => void
  updateNewPostText: (newText: string) => void
  addMessage: () => void
  updateNewMessageAuthor: (newAuthor: string) => void
  updateNewMessageText: (newText: string) => void
  rerenderEntireTree: () => void
  subscribe: (observer: () => void) => void
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
      newMessageAuthor: 'Briws',
      newMessageText: 'Hellooo'
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
      newPostText: 'briws.ru'
    },
    sidebar: {
      friends: [
        { name: 'Liza', avatar: 'img/ava.png' },
        { name: 'Masha', avatar: 'img/ava.png' },
        { name: 'Diana', avatar: 'img/ava.png' }
      ]
    }
  },
  getState() {
    return this._state
  },
  addPost() {
    const newPost: postsType = {
      id: new Date().getTime(),
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this.rerenderEntireTree();
  },
  updateNewPostText (newText: string) {
    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree();
  },
  addMessage() {
    const newMessage: messagesType = {
      id: new Date().getTime(),
      message: state.dialogsPage.newMessageText,
      author: state.dialogsPage.newMessageAuthor,
      avatar: 'img/ava.png'
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._state.dialogsPage.newMessageAuthor = '';
    this.rerenderEntireTree();
  },
  updateNewMessageAuthor (newAuthor: string) {
    this._state.dialogsPage.newMessageAuthor = newAuthor;
    this.rerenderEntireTree();
  },
  updateNewMessageText (newText: string){
    this._state.dialogsPage.newMessageText = newText;
    this.rerenderEntireTree();
  },
  rerenderEntireTree() {
    console.log('State changed');
  },
  subscribe(observer: () => void){
    this.rerenderEntireTree = observer
  }
}

export default store;
// @ts-ignore
window.store = store;

