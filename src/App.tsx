import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {SidebarContainer} from './components/Sidebar/SidebarContainer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <SidebarContainer/>
            <div className={'app-wrapper-content'}>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile" render={() => <ProfileContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}