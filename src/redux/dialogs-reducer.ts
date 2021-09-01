import ava from '../assets/images/ava.png'

export type MessagesType = {
  id: number
  message: string
  avatar: string
}
type DialogsType = {
  id: number
  name: string
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
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
    {id: 1, message: 'Lorem ipsum dolor sit amet', avatar: ava},
    {id: 2, message: 'Lorem ipsum dolor sit amet', avatar: ava},
    {id: 3, message: 'Lorem ipsum dolor sit amet', avatar: ava},
    {id: 4, message: 'Lorem ipsum dolor sit amet', avatar: ava}
  ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionTypes): DialogsPageType => {
  switch (action.type) {
    case 'SEND-MESSAGE': {
      let body = action.newMessageBody;
      const newMessage: MessagesType = {
        id: new Date().getTime(),
        message: body,
        avatar: ava
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    }
    default:
      return state;
  }
}

// Action Creators:
export const sendMessage = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)

export type DialogsActionTypes = ReturnType<typeof sendMessage>

