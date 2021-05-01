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
export  type stateType = {
  dialogsPage: dialogsPageType
  profilePage: profilePageType
  sidebar: sidebarType
}

let rerenderEntireTree = () => {
}

export const subscribe = (observer: () => void) => {
  rerenderEntireTree = observer
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



// @ts-ignore
window.state = state;

export const addPost = () => {
  const newPost: postsType = {
    id: new Date().getTime(),
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}

export const addMessage = () => {
  const newMessage: messagesType = {
    id: new Date().getTime(),
    message: state.dialogsPage.newMessageText,
    author: state.dialogsPage.newMessageAuthor,
    avatar: 'img/ava.png'
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  state.dialogsPage.newMessageAuthor = '';
  rerenderEntireTree();
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}

export const updateNewMessageAuthor = (newAuthor: string) => {
  state.dialogsPage.newMessageAuthor = newAuthor;
  rerenderEntireTree();
}

export const updateNewMessageText = (newText: string) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree();
}

type storeType = {
  _state: stateType
  getState: () => stateType
  addPost: () => void
  addMessage: () => void
  updateNewPostText: (newText: string) => void
  updateNewMessageAuthor: (newAuthor: string) => void
  updateNewMessageText: (newText: string) => void
}


export let store: storeType = {
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
      message: state.profilePage.newPostText,
      likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
  },
  addMessage() {
    const newMessage: messagesType = {
      id: new Date().getTime(),
      message: state.dialogsPage.newMessageText,
      author: state.dialogsPage.newMessageAuthor,
      avatar: 'img/ava.png'
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    state.dialogsPage.newMessageAuthor = '';
    rerenderEntireTree();
  },
  updateNewPostText (newText: string) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
  },
  updateNewMessageAuthor (newAuthor: string) {
    state.dialogsPage.newMessageAuthor = newAuthor;
    rerenderEntireTree();
  },
  updateNewMessageText (newText: string){
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree();
  }
}


export default state;