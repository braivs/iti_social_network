import React from 'react';
import {
  dialogsPageType,
  sendMessageCreator,
  updateNewMessageAuthorCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
  dialogsPage: dialogsPageType
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

type mapDispatchToPropsType = {
  updateNewMessageAuthor: (author: string) => void
  updateNewMessageBody: (body: string) => void
  sendMessage: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs);

export default DialogsContainer;