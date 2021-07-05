import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, profileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  profilePage: ProfilePageType
}


type MapDispatchPropsType = {
  setUserProfile: (profile: profileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType>{

// здесь сайд эффекты
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

