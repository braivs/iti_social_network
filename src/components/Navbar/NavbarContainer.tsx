import React from 'react';
import Navbar from './Navbar';
import StoreContext from '../../StoreContext';

type NavbarType = {
  // store: ReduxStoreType
}

const NavbarContainer:React.FC<NavbarType> = () => {

  return <StoreContext.Consumer>
    {
    (store) => {
      let state = store.getState().sidebarReducer;
      return <Navbar sidebar={state}/>
    }
  }
  </StoreContext.Consumer>
}
export default NavbarContainer;