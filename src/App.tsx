import React from 'react';
import './App.scss';
import {Route, withRouter} from 'react-router-dom';
import {SidebarContainer} from './components/Sidebar/SidebarContainer';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
    import('./components/Dialogs/DialogsContainer')
        .then(({DialogsContainer}) => ({default: DialogsContainer})),
);
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={'back'}>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <SidebarContainer/>
                    <div className={'app-wrapper-content'}>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        {/*<Redirect from={'/'} to={'/profile'}/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)