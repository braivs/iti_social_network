import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import state, {
  addMessage,
  addPost,
  subscribe,
  updateNewMessageAuthor,
  updateNewMessageText,
  updateNewPostText
} from './redux/state';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageAuthor={updateNewMessageAuthor}
        updateNewMessageText={updateNewMessageText}/>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree();

subscribe(rerenderEntireTree)