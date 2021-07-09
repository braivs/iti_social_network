import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";


export const Header:React.FC = () => {
  return <header className={s.header}>
    <img src={logo} alt=""/>
    <div className={s.loginBlock}>
      <NavLink to={'/login'}>Login</NavLink>
    </div>
  </header>
}