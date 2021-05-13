import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss'
import { FriendItem } from './FriendItem/FriendItem';
import {sidebarType} from '../../types/entities';
import {reduxStoreType} from '../../redux/redux-store';
import Navbar from './Navbar';

type NavbarType = {
  store: reduxStoreType
}

const NavbarContainer:React.FC<NavbarType> = (props) => {
  let sidebar = props.store.getState().sidebarReducer;
  return <Navbar sidebar={sidebar}/>
}
export default NavbarContainer;