import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog + ' ' + s.active}>
          Briws
        </div>
        <div className={s.dialog}>
          Masha
        </div>
        <div className={s.dialog}>
          Lera
        </div>
        <div className={s.dialog}>
          Liza
        </div><div className={s.dialog}>
          Diana
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