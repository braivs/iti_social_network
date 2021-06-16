import {
  DialogsPageType,
  sendMessageCreator,
  updateNewMessageAuthorCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {Dialogs} from './Dialogs';

type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
  updateNewMessageAuthor: (author: string) => void
  updateNewMessageBody: (body: string) => void
  sendMessage: () => void
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateNewMessageAuthor: (author: string) => {
      dispatch(updateNewMessageAuthorCreator(author));
    },
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs);