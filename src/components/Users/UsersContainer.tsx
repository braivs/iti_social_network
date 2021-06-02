import React from 'react';
import {connect} from 'react-redux';
import {usersPageType, usersType} from '../../types/entities';
import Users from './Users';
import {followAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
  usersPage: usersPageType
}

let mapStateToProps = (state: mapStateToPropsType) => {
  return {
    users: state.usersPage.users
  }
}

type mapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<usersType>) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<usersType>) => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);