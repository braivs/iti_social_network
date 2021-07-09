import ava from '../assets/images/ava.png'

export type MessagesType = {
  id: number
  message: string
  author: string
  avatar: string
}
type DialogsType = {
  id: number
  name: string
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageAuthor: string
  newMessageBody: string
}

let initialState: DialogsPageType = {
  dialogs: [
    {id: 1, name: 'BriWS'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Lera'},
    {id: 4, name: 'Liza'},
    {id: 5, name: 'Diana'},
    {id: 6, name: 'Kristina'}
  ],
  messages: [
    {id: 1, message: 'Lorem ipsum dolor sit amet', author: 'Masha', avatar: ava},
    {id: 2, message: 'Lorem ipsum dolor sit amet', author: 'Briws', avatar: ava},
    {id: 3, message: 'Lorem ipsum dolor sit amet', author: 'Lera', avatar: ava},
    {id: 4, message: 'Lorem ipsum dolor sit amet', author: 'Liza', avatar: ava}
  ],
  newMessageAuthor: '',
  newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionTypes): DialogsPageType => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-AUTHOR': {
      return {
        ...state,
        newMessageAuthor: action.newAuthor
      }
    }
    case 'UPDATE_NEW_MESSAGE_BODY': {
      return {
        ...state,
        newMessageBody: action.body
      };
    }
    case 'SEND-MESSAGE': {
      let body = state.newMessageBody;
      let author = state.newMessageAuthor;
      const newMessage: MessagesType = {
        id: new Date().getTime(),
        message: body,
        author: author,
        avatar: ava
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
export const sendMessage = () => ({type: 'SEND-MESSAGE'} as const)
export const updateNewMessageAuthor = (author: string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-AUTHOR', newAuthor: author
  } as const
}
export const updateNewMessageBody = (body: string) => {
  return {
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body: body
  } as const
    }

export type DialogsActionTypes = ReturnType<typeof sendMessage> | ReturnType<typeof updateNewMessageAuthor> |
ReturnType<typeof updateNewMessageBody>

export default dialogsReducer;
