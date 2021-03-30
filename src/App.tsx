import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className={'appWrapper'}>
      <header className={'header'}>
        <img src="img/logo.png" alt=""/>
      </header>
      <nav className={'nav'}>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className={'content'}>
        <img src="img/main.jpg" alt=""/>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
            <div>
              <div>
                post 1
              </div>
              <div>
                post 2
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>);
}


export default App;
