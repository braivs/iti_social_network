import ava from '../assets/images/ava.png'

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
    avatar: string
}

let initialState = {
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

export type InitialStateDialogsType = typeof initialState

export const dialogsReducer = (state = initialState, action: DialogsActionTypes): InitialStateDialogsType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = action.newMessageBody;
            const newMessage: MessageType = {
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

