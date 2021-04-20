import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addMessage} from './redux/state';
import {addPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={addMessage}/>,
  </BrowserRouter>, document.getElementById('root')
);
}


