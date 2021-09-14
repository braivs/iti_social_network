import {connect} from 'react-redux';
import {
    follow, requestUsers,
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
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


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
    requestUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
type UsersAPIPropsType = MapDispatchToPropsTypeAPI & MapStateToPropsTypeAPI & UsersPropsType

class UsersContainer extends React.Component<UsersAPIPropsType> {
    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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

/*const mapStateToProps = (state: AppRootStateType): MapStatePropsType & MapStateToPropsTypeAPI => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
const mapStateToProps = (state: AppRootStateType): MapStatePropsType & MapStateToPropsTypeAPI => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {follow, unfollow, setUsers, setCurrentPage, toggleFollowingProgress, requestUsers}),
)(UsersContainer)

