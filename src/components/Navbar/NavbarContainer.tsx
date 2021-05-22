import React from 'react';
import Navbar from './Navbar';
import {sidebarType} from '../../types/entities';
import {ReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type mapStateToPropsType = {
  sidebar: sidebarType
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    sidebar: state.sidebarReducer
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;