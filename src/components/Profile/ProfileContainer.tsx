import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfilePageType, updateStatus} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

type PathParamsType = {
  userId: string
}

type MapStatePropsType = {
  profilePage: ProfilePageType
  status: string
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '1049';
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
  status: state.profilePage.status
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer)

