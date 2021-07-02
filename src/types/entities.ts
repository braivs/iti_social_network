import {sendMessageCreator, updateNewMessageAuthorCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/profile-reducer';
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from '../redux/users-reducer';

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageAuthorCreator> |
  ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof follow> | ReturnType<typeof unfollow> |
  ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
  ReturnType<typeof toggleIsFetching>;