import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';

type MapStatePropsType = {
  usersPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.users
  }
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);