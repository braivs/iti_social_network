import React from 'react';
import s from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

type DialogItemType = {
  id: number
  name: string
}

export const DialogItem: React.FC<DialogItemType> = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}