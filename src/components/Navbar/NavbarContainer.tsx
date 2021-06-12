import React from 'react';
import Navbar from './Navbar';
import {sidebarType} from '../../types/entities';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type mapStateToPropsType = {
  sidebar: sidebarType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    sidebar: state.sidebar
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;