import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {SidebarType} from '../../redux/sidebar-reducer';
import Sidebar from './Sidebar';

type MapStatePropsType = {
  sidebar: SidebarType
}

export type SidebarPropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    sidebar: state.sidebar
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)
export default SidebarContainer;