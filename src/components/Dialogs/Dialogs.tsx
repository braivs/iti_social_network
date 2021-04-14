import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';


const Dialogs = () => {

  let dialogs = [
    {id: 1,name: 'BriWS'},
    {id: 2,name: 'Masha'},
    {id: 3,name: 'Lera'},
    {id: 4,name: 'Liza'},
    {id: 5,name: 'Diana'},
    {id: 6,name: 'Kristina'}
  ]
  let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Namaskar'},
    {id: 3, message: 'Namaste'},
    {id: 4, message: 'Love'},
    {id: 5, message: 'Peace'},
    {id: 6, message: 'We all one'},
  ]

 let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
 let messagesElements = messages.map(m => <Message message={m.message} /> )

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;