type dialogsType = {
  id: number
  name: string
}
type messagesType = {
  id: number
  message: string
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

export  type stateType = {
  dialogsPage: dialogsPageType
  profilePage: profilePageType
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
      {id: 1, message: 'Hello'},
      {id: 2, message: 'Namaskar'},
      {id: 3, message: 'Namaste'},
      {id: 4, message: 'Love'},
      {id: 5, message: 'Peace'},
      {id: 6, message: 'We all one'}
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
  }
}

export default state;