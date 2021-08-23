import {connect} from 'react-redux';
import {
  follow,
  getUsers,
  setCurrentPage,
  setUsers,
  toggleFollowingProgress,
  unfollow,
  UserType
} from '../../redux/users-reducer';
import {AppRootStateType} from '../../redux/redux-store';
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type MapStateToPropsTypeAPI = {
  isFetching: boolean
}

type MapDispatchToPropsTypeAPI = {
  setCurrentPage: (pageNumber: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
type UsersAPIPropsType = MapDispatchToPropsTypeAPI & MapStateToPropsTypeAPI & UsersPropsType

class UsersContainer extends React.Component<UsersAPIPropsType> {
  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)

  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType & MapStateToPropsTypeAPI => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, toggleFollowingProgress, getUsers}),
)(UsersContainer)

