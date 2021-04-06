import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to={'/dialogs/1'}>Briws</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'}>Masha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'}>Lera</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'}>Liza</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/5'}>Diana</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>Namaskar</div>
        <div className={s.dialog}>Namaste</div>
      </div>
    </div>
  )
}

export default Dialogs;