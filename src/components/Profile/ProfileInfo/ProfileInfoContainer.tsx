import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {TopType} from '../../../redux/profile-reducer';

type MapStatePropsType = {
  top: TopType
}

export type ProfileInfoPropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    top: state.profilePage.top
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)

export default ProfileInfoContainer;