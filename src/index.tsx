import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import state, {
  addMessage,
  addPost, store,
  subscribe,
  updateNewMessageAuthor,
  updateNewMessageText,
  updateNewPostText
} from './redux/state';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost}
        addMessage={store.addMessage}
        updateNewPostText={store.updateNewPostText}
        updateNewMessageAuthor={store.updateNewMessageAuthor}
        updateNewMessageText={store.updateNewMessageText}/>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree();

subscribe(rerenderEntireTree)