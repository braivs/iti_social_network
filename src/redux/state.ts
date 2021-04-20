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

let state: stateType = {
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
    ]
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
    ]
  },
  sidebar: {
    friends: [
      { name: 'Liza', avatar: 'img/ava.png' },
      { name: 'Masha', avatar: 'img/ava.png' },
      { name: 'Diana', avatar: 'img/ava.png' }
    ]
  }
}

export const addPost = (postMessage: string) => {
  const newPost: postsType = {
    id: new Date().getTime(),
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
}
export const addMessage = (messageAuthor: string, messageText: string) => {
  debugger
  const newMessage: messagesType = {
    id: new Date().getTime(),
    message: messageText,
    author: messageAuthor,
    avatar: 'img/ava.png'
  };
  state.dialogsPage.messages.push(newMessage);
}

export default state;