import {ActionTypes, dialogsPageType, messagesType} from '../types/entities';

let initialState: dialogsPageType = {
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
}

const dialogsReducer = (state = initialState, action: ActionTypes): dialogsPageType => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-AUTHOR': {
      return {
        ...state,
        newMessageAuthor: action.newAuthor
      }
    };
    case 'UPDATE_NEW_MESSAGE_BODY': {
      return {
        ...state,
        newMessageBody: action.body
      };
    };
    case 'SEND-MESSAGE': {
      let body = state.newMessageBody;
      let author = state.newMessageAuthor;
      const newMessage: messagesType = {
        id: new Date().getTime(),
        message: body,
        author: author,
        avatar: 'img/ava.png'
      };
      return {
        ...state,
        newMessageAuthor: '',
        newMessageBody: '',
        messages: [...state.messages, newMessage]
      }
    }
    default:
      return state;
  }
}

// Action Creators:
export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'} as const)
export const updateNewMessageAuthorCreator = (author: string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-AUTHOR', newAuthor: author
  } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
  return {
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body: body
  } as const
    }

export default dialogsReducer;
