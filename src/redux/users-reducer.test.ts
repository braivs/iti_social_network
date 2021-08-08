import {UsersPageType, UserType} from "./users-reducer";

let startState: UsersPageType

beforeEach(() => {
  startState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
  }
})

test('followSuccess', () => {
  console.log('I don`t know how to write')
})
test('unfollowSuccess', () => {
  console.log('I don`t know how to write')
})
test('setUsers', () => {
  console.log('I don`t know how to write')
})
test('setCurrentPage', () => {
  console.log('I don`t know how to write')
})
test('setTotalUsersCount', () => {
  console.log('I don`t know how to write')
})
test('toggleIsFetching', () => {
  console.log('I don`t know how to write')
})
test('toggleFollowingProgress', () => {
  console.log('I don`t know how to write')
})

