import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss'
import {FriendItem} from './FriendItem/FriendItem';
import {sidebarType} from '../../types/entities';

type NavbarType = {
  sidebar: sidebarType
}

const Navbar:React.FC<NavbarType> = (props) => {

  let FriendsElements = props.sidebar.friends.map(f => <FriendItem name={f.name} avatar={f.avatar}/>)

  return (
    <div className={s.navbarContainer}>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
      </nav>
      <div className={s.friends}>
        <h3>Friends</h3>
        <div className={s.friendsContainer}>{FriendsElements}</div>
      </div>
    </div>


  )
}

export default Navbar;