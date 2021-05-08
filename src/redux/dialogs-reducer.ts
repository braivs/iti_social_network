import {ActionTypes, dialogsPageType, messagesType} from './state';


const dialogsReducer = (state: dialogsPageType, action: ActionTypes): dialogsPageType => {

  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-AUTHOR':
      state.newMessageAuthor = action.newAuthor;
      return state;
    case 'UPDATE-NEW-MESSAGE-BODY':
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
export const updateNewMessageBodyCreator = (body: string) => (
  {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body
  } as const
)

export default dialogsReducer;
