import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {SidebarContainer} from './components/Sidebar/SidebarContainer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

export const App = () => {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer />
            <SidebarContainer/>
            <div className={'app-wrapper-content'}>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login />}/>
            </div>
        </div>
    );
}