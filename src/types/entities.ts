import {sendMessage, updateNewMessageAuthor, updateNewMessageBody} from '../redux/dialogs-reducer';
import {addPost, updateNewPostText} from '../redux/profile-reducer';
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from '../redux/users-reducer';

export type ActionTypes = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText>
  | ReturnType<typeof sendMessage> | ReturnType<typeof updateNewMessageAuthor> |
  ReturnType<typeof updateNewMessageBody> | ReturnType<typeof follow> | ReturnType<typeof unfollow> |
  ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
  ReturnType<typeof toggleIsFetching>;