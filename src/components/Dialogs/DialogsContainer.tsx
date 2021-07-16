import {DialogsPageType, sendMessage, updateNewMessageAuthor, updateNewMessageBody} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';

type MapStatePropsType = {
  dialogsPage: DialogsPageType
  isAuth: boolean
}

type MapDispatchPropsType = {
  updateNewMessageAuthor: (author: string) => void
  updateNewMessageBody: (body: string) => void
  sendMessage: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

export const DialogsContainer = connect(mapStateToProps, { updateNewMessageAuthor, updateNewMessageBody,
  sendMessage })(Dialogs);