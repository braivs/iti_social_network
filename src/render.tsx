import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, stateType, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
  </BrowserRouter>, document.getElementById('root')
);
}