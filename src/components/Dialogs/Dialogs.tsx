import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {
  ActionTypes,
  sendMessageCreator,
  dialogsPageType,
  updateNewMessageAuthorCreator,
  updateNewMessageBodyCreator, StoreType
} from '../../redux/state';

type DialogsType = {
  store: StoreType
}

const Dialogs: React.FC<DialogsType> = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
  let messagesElements = state.messages.map(m =>
    <Message message={m.message}
             author={m.author}
             avatar={m.avatar}
    />)
  let newMessageBody = state.newMessageBody;


  let newAuthorElement = React.createRef<HTMLTextAreaElement>();
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewAuthorChange = () => {
    if (newAuthorElement.current) {
      let author = newAuthorElement.current.value;
      props.store.dispatch(updateNewMessageAuthorCreator(author))
    }
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

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
            <textarea onChange={onNewAuthorChange} ref={newAuthorElement}
                      value={state.newMessageAuthor}/>
          </div>
          <div className={s.newMessageText}>
            <div>Text:</div>
            <textarea placeholder="Enter your message" onChange={onNewMessageChange} value={newMessageBody}/>
          </div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default Dialogs;