import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {stateType} from './redux/state';

type AppType = {
  state: stateType
  addPost: () => void
  addMessage: () => void
  updateNewPostText: (newText: string) => void
  updateNewMessageAuthor: (newAuthor: string) => void
  updateNewMessageText: (newText: string) => void
}

const App: React.FC<AppType> = (props) => {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <Navbar sidebar={props.state.sidebar}/>
      <div className={'app-wrapper-content'}>
        <Route path="/dialogs" render={() => <Dialogs
          dialogsPage={props.state.dialogsPage}
          addMessage={props.addMessage}
          updateNewMessageAuthor={props.updateNewMessageAuthor}
          updateNewMessageText={props.updateNewMessageText}
        />}/>
        <Route path="/profile"
               render={() => <Profile
                 profilePage={props.state.profilePage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>}
        />
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
}


export default App;
