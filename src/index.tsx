import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

/*export type ProviderType = {
  store: ReduxStoreType,
  children: any
}*/

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value = {store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree()
})