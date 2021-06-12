import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {TopType} from '../../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo';

type MapStatePropsType = {
  top: TopType
}

export type ProfileInfoPropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    top: state.profilePage.top
  }
}

export const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)