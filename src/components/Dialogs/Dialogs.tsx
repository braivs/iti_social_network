import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemType = {
  id: number
  name: string
}

type MessageType = {
  message: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
  let path = '/dialogs/'+ props.id;
  return (
  <div className={s.dialog}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
  )
}

const Message: React.FC<MessageType> = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem id={1} name={'Briws'} />
        <DialogItem id={2} name={'Masha'} />
        <DialogItem id={3} name={'Lera'} />
        <DialogItem id={4} name={'Liza'} />
        <DialogItem id={5} name={'Diana'} />
      </div>
      <div className={s.messages}>
        <Message message={'Hi'} />
        <Message message={'Namaskar'} />
        <Message message={'Namaste'} />
        <Message message={'Love'} />
        <Message message={'Peace'} />
        <Message message={'Yo'} />
      </div>
    </div>
  )
}

export default Dialogs;