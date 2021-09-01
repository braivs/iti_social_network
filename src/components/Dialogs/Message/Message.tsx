import React from 'react';
import s from './Message.module.scss'

type MessageType = {
  message: string
  avatar: string
}
export const Message: React.FC<MessageType> = (props) => {


  return <div className={s.messagesContainer}>
    <div className={s.left}>
      <img src={props.avatar} alt=""/>
    </div>
    <div className={s.right}>
      {props.message}

    </div>

  </div>
}