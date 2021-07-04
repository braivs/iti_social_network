import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";



class ProfileContainer extends React.Component{

  // здесь сайд эффекты
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        // @ts-ignore
        this.props.setUserProfile(response.data)
      });
  }

  render() {
    return (
      // @ts-ignore
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

