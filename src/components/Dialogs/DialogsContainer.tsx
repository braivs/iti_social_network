import {DialogsPageType, sendMessage, updateNewMessageAuthor, updateNewMessageBody} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
  updateNewMessageAuthor: (author: string) => void
  updateNewMessageBody: (body: string) => void
  sendMessage: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, { updateNewMessageAuthor, updateNewMessageBody,
  sendMessage })(Dialogs));