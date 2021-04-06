import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <>
      <img src="img/main.jpg" alt=""/>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </>
  )
}