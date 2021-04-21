import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {dialogsPageType} from '../../redux/state';

type DialogsType = {
  dialogsPage: dialogsPageType
  addMessage : (messageAuthor: string, messageText: string) => void
}

const Dialogs:React.FC<DialogsType> = (props) => {
 let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
 let messagesElements = props.dialogsPage.messages.map(m =>
   <Message message={m.message}
            author={m.author}
            avatar={m.avatar}
   />)

  let newAuthorElement = React.createRef<HTMLTextAreaElement>();
  let newMessageElement = React.createRef<HTMLTextAreaElement>();
  let addMessage = () => {
    if (newAuthorElement.current && newMessageElement.current) {
      props.addMessage(newAuthorElement.current.value, newMessageElement.current.value)
      newAuthorElement.current.value = '';
      newMessageElement.current.value = '';
    }
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <div className={s.newMessageContainer}>
          <div className={s.newMessageAuthor}>
            <div>Author:</div>
            <textarea ref={newAuthorElement}/>
          </div>
          <div className={s.newMessageText}>
            <div>Text:</div>
            <textarea ref={newMessageElement}/>
          </div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default Dialogs;