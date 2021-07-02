import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
  unfollow,
  UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type MapStateToPropsTypeAPIOnly = {
  isFetching: boolean
}

type MapDispatchToPropsTypeAPIOnly = {
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

export type UsersAPIComponentPropsType = MapStatePropsType & MapDispatchToPropsType
  & MapDispatchToPropsTypeAPIOnly & MapStateToPropsTypeAPIOnly

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      });
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
      />
    </>
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType & MapStateToPropsTypeAPIOnly => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType & MapDispatchToPropsTypeAPIOnly => {
  return {
    follow: (userId: number) => {
      dispatch(follow(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollow(userId))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsers(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPage(pageNumber))
    },
    setUsersTotalCount: (totalCount: number) => {
      dispatch(setUsersTotalCount(totalCount))
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetching(isFetching))
    }
  }
}*/

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);