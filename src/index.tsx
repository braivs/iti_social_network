import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import store from './redux/store';
import store, {reduxStateType} from './redux/redux-store';

// export type ReduxStateType = ReturnType<typeof store.getState>

export let rerenderEntireTree = (state: reduxStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
})