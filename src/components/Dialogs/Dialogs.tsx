import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

export type DialogsFormDataType = {
    newMessageBody: string
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m =>
        <Message key={m.id}
                 message={m.message}
                 avatar={m.avatar}
        />)

    const addNewMessage = (values: DialogsFormDataType) => {
        props.sendMessage(values.newMessageBody);
    }

    // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}