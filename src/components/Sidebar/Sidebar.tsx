import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Sidebar.module.scss'
import {FriendItem} from './FriendItem/FriendItem';
import {SidebarPropsType} from './SidebarContainer';
import profileImg from '../../assets/images/sidebar/user.png'
import dialogsImg from '../../assets/images/sidebar/comment.png'
import usersImg from '../../assets/images/sidebar/group.png'
import newsImg from '../../assets/images/sidebar/newspaper.png'
import musicImg from '../../assets/images/sidebar/musical-note.png'
import settingsImg from '../../assets/images/sidebar/settings.png'


export const Sidebar: React.FC<SidebarPropsType> = (props) => {

    let FriendsElements = props.sidebar.friends.map(f => <FriendItem key={f.id} id={f.id} name={f.name}
                                                                     avatar={f.avatar}/>)

    return (
        <div className={s.navbarContainer}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" className={s.navLink} activeClassName={s.active}>
                        <img src={profileImg} alt=""/>Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={s.navLink} activeClassName={s.active}>
                        <img src={dialogsImg} alt=""/>Dialogs
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' className={s.navLink} activeClassName={s.active}>
                        <img src={usersImg} alt=""/>Users
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' className={s.navLink} activeClassName={s.active}>
                        <img src={newsImg} alt=""/>News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' className={s.navLink} activeClassName={s.active}>
                        <img src={musicImg} alt=""/>Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' className={s.navLink} activeClassName={s.active}>
                        <img src={settingsImg} alt=""/>Settings
                    </NavLink>
                </div>
            </nav>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.friendsContainer}>{FriendsElements}</div>
            </div>
        </div>
    )
}