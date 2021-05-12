import {ActionTypes, dialogsPageType, messagesType} from '../types/entities';

/*type dialogsActionTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageAuthorCreator> |
  ReturnType<typeof updateNewMessageBodyCreator>*/

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
    case 'UPDATE-NEW-MESSAGE-AUTHOR':
      state.newMessageAuthor = action.newAuthor;
      return state;
    case 'UPDATE_NEW_MESSAGE_BODY':
      state.newMessageBody = action.body;
      return state;
    case 'SEND-MESSAGE':
      const newMessage: messagesType = {
        id: new Date().getTime(),
        message: state.newMessageBody,
        author: state.newMessageAuthor,
        avatar: 'img/ava.png'
      };
      state.messages.push(newMessage);
      state.newMessageAuthor = '';
      state.newMessageBody = '';
      return state;
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
