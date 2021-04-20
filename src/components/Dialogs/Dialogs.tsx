import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {dialogsPageType} from '../../redux/state';

type DialogsType = {
  dialogsPage: dialogsPageType
}

const Dialogs:React.FC<DialogsType> = (props) => {
 let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
 let messagesElements = props.dialogsPage.messages.map(m =>
   <Message message={m.message}
            author={m.author}
            avatar={m.avatar}
   />)

  let newMessageElement = React.createRef<HTMLTextAreaElement>();
  let addMessage = () => {
    let text = newMessageElement.current?.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <textarea ref={newMessageElement}/>
        <button onClick={addMessage}>Add message</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Dialogs;