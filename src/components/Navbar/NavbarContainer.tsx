import React from 'react';
import Navbar from './Navbar';
import {sidebarType} from '../../types/entities';
import {ReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type NavbarType = {
  // store: ReduxStoreType
}

type mapStateToPropsType = {
  sidebar: sidebarType
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    sidebar: state.sidebarReducer
  }
}

/*const NavbarContainer:React.FC<NavbarType> = () => {

  return <StoreContext.Consumer>
    {
    (store) => {
      let state = store.getState().sidebarReducer;
      return <Navbar sidebar={state}/>
    }
  }
  </StoreContext.Consumer>
}*/

const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;