import {sendMessage, updateNewMessageAuthor, updateNewMessageBody} from '../redux/dialogs-reducer';
import {addPost, setUserProfile, updateNewPostText} from '../redux/profile-reducer';
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from '../redux/users-reducer';

export type ActionTypes = /*profile-reducer*/ ReturnType<typeof addPost> | ReturnType<typeof setUserProfile>
  | ReturnType<typeof updateNewPostText>
  /*dialogs-reducer*/ | ReturnType<typeof sendMessage> | ReturnType<typeof updateNewMessageAuthor> |
  ReturnType<typeof updateNewMessageBody>
  /*users-reducer*/ | ReturnType<typeof follow> | ReturnType<typeof unfollow> |
  ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
  ReturnType<typeof toggleIsFetching>;