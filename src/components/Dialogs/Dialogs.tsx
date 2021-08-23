import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import { Redirect } from 'react-router-dom';

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
  let messagesElements = state.messages.map(m =>
    <Message key={m.id}
             message={m.message}
             author={m.author}
             avatar={m.avatar}
    />)
  let newMessageAuthor = state.newMessageAuthor;
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  const onNewAuthorChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let author = e.target.value;
    props.updateNewMessageAuthor(author)
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  }

  // if (!props.isAuth) return <Redirect to={'/login'}/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.newMessageContainer}>
          <div className={s.newMessageAuthor}>
            <div>Author:</div>
            <textarea placeholder="Enter your name" onChange={onNewAuthorChange} value={newMessageAuthor}/>
          </div>
          <div className={s.newMessageText}>
            <div>Text:</div>
            <textarea placeholder="Enter your message" onChange={onNewMessageChange} value={newMessageBody}/>
          </div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  )
}