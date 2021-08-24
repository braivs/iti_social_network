import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
  getStatus,
  getUserProfile,
  ProfileActionTypes,
  ProfilePageType,
  updateStatus
} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";

type PathParamsType = {
  userId: string
}

type MapStatePropsType = {
  profilePage: ProfilePageType
  status: string // ?
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void // Dispatch<ProfileActionTypes>
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2';
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)

  }

  render() {
    debugger
    return (
      <Profile {...this.props} profilePage={this.props.profilePage} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  profilePage: state.profilePage,
  status: state.profilePage.status
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer)

