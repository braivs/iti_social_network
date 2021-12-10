import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    InitialStateProfileType,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {ProfileType} from "../../types/types";

type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    isOwner?: boolean
    profilePage: InitialStateProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    refreshProfile() {
        let userId: number | null = parseInt(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profilePage={this.props.profilePage}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return ({
        profilePage: state.profilePage,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)



