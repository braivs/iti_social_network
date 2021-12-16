import React from 'react';
import './App.scss';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
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
    // todo: maybe need to fix any & realize global error show
    catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
        console.log('App catchAllUnhandledErrors: ', 'Some error occurred') // in PS99 was alert. I change it for better experience.
        // and here dispatch thunk
        // console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
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