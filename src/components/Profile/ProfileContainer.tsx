import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, profileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
  userId: string
}

type MapStatePropsType = {
  profilePage: ProfilePageType
}

type MapDispatchPropsType = {
  setUserProfile: (profile: profileType) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType>{

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      });
  }

  render() {
    return (
      <Profile {...this.props} profilePage={this.props.profilePage}/>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profilePage: state.profilePage
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

