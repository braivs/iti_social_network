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

  let dialogsData = [
    {id: 1,name: 'BriWS'},
    {id: 2,name: 'Masha'},
    {id: 3,name: 'Lera'},
    {id: 4,name: 'Liza'},
    {id: 5,name: 'Diana'},
    {id: 6,name: 'Kristina'}
  ]
  let dialogsElements = [
    <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />,
    <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />,
    <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
  ]

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Namaskar'},
    {id: 3, message: 'Namaste'},
    {id: 4, message: 'Love'},
    {id: 5, message: 'Peace'},
    {id: 6, message: 'Yo'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
        {/*<DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />*/}
      </div>
      <div className={s.messages}>
        {/*<Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />*/}
      </div>
    </div>
  )
}

export default Dialogs;