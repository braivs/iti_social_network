import ava from "../assets/images/ava.png";
import {
  DialogsPageType,
  dialogsReducer,
  sendMessage,
  updateNewMessageAuthor,
  updateNewMessageBody
} from "./dialogs-reducer";

let startState: DialogsPageType;

beforeEach(() => {
  startState =  {
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
    newMessageAuthor: 'testAuthor',
    newMessageBody: 'testBody'
  }
})

test('add new message', () => {
  const action = sendMessage()

  const endState = dialogsReducer(startState, action)

  expect(endState.messages.length).toBe(5)
  expect(endState.messages[4].message).toBe('testBody')
  expect(endState.messages[4].author).toBe('testAuthor')

})

test('update new message author', () => {
  const action = updateNewMessageAuthor('newAuthor')
  const endState = dialogsReducer(startState, action)
  expect(endState.newMessageAuthor).toBe('newAuthor')
})

test('update new message body',() => {
  const action = updateNewMessageBody('newText')
  const endState = dialogsReducer(startState, action)
  expect(endState.newMessageBody).toBe('newText')
})
