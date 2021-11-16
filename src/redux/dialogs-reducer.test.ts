import ava from "../assets/images/ava.png";
import {dialogsReducer, DialogType, MessageType, sendMessage} from "./dialogs-reducer";

let state = {
    dialogs: [
        {id: 1, name: 'BriWS'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Lera'},
        {id: 4, name: 'Liza'},
        {id: 5, name: 'Diana'},
        {id: 6, name: 'Kristina'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Lorem ipsum dolor sit amet', avatar: ava},
        {id: 2, message: 'Lorem ipsum dolor sit amet', avatar: ava},
        {id: 3, message: 'Lorem ipsum dolor sit amet', avatar: ava},
        {id: 4, message: 'Lorem ipsum dolor sit amet', avatar: ava}
    ] as Array<MessageType>
}

test('length of messages should be incremented', () => {
    // 1. test data
    let action = sendMessage('new message')

    //2. action
    let newState = dialogsReducer(state, action)

    //3. expectation
    expect(newState.messages.length).toBe(5)
})

test('text of new messages should be correct', () => {
    let action = sendMessage('new message')

    let newState = dialogsReducer(state, action)

    expect(newState.messages[4].message).toBe('new message')
})