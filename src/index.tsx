import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

type dialogsType = {
  id: number
  name: string
}
type messagesType = {
  id: number
  message: string
}
export type dialogsDataType = {
  dialogs: Array<dialogsType>
  messages: Array<messagesType>
}

export type profileInfoDataType = {
  imgSrc: string
  imgAlt: string
  description: string
}
export type postsType = {
  id: number
  message: string
  likesCount: number
}
export type profileDataType = {
  profileInfoData: profileInfoDataType
  posts: Array<postsType>
}

export  type stateType = {
  dialogsData: dialogsDataType
  profileData: profileDataType
}

let state: stateType = {
  dialogsData: {
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
  profileData: {
    profileInfoData: {
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

ReactDOM.render(<App state={state}/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
