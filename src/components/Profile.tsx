import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="img/main.jpg" alt=""/>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;