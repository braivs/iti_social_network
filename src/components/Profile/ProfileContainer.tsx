import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfilePageType, updateStatus} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      if( this.props.authorizedUserId) {
        userId = this.props.authorizedUserId;
      } else {
        userId = '2'
      }

    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props} profilePage={this.props.profilePage} status={this.props.status}
               updateStatus={this.props.updateStatus}/>
    )
  }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  profilePage: state.profilePage,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer)

type PathParamsType = {
  userId: string | undefined
}
type MapStatePropsType = {
  profilePage: ProfilePageType
  status: string
  authorizedUserId: string | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  getUserProfile: (userId: string | null) => void
  getStatus: (userId: string | null) => void
  updateStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType


