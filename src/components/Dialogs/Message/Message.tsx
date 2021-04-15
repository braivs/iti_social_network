import React from 'react';
import s from '../Dialogs.module.scss';

type MessageType = {
  message: string
}
export const Message: React.FC<MessageType> = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}