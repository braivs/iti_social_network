import {AppRootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {InitialStateSidebarType} from '../../redux/sidebar-reducer';
import {Sidebar} from './Sidebar';

type MapStatePropsType = {
  sidebar: InitialStateSidebarType
}

export type SidebarPropsType = MapStatePropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    sidebar: state.sidebar
  }
}

export const SidebarContainer = connect(mapStateToProps)(Sidebar)