import {sendMessageCreator, updateNewMessageAuthorCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/profile-reducer';
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from '../redux/users-reducer';

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageAuthorCreator> |
  ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |
  ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setUsersTotalCountAC>;