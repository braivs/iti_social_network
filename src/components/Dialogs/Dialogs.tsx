import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {dialogsDataType} from '../../index';

type DialogsType = {
  dialogsData: dialogsDataType
}

const Dialogs:React.FC<DialogsType> = (props) => {

 let dialogsElements = props.dialogsData.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
 let messagesElements = props.dialogsData.messages.map(m => <Message message={m.message} /> )

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