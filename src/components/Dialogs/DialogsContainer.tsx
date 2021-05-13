import React from 'react';

import {
  sendMessageCreator,
  updateNewMessageAuthorCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';
import {reduxStoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsType = {
  store: reduxStoreType
}

const DialogsContainer: React.FC<DialogsType> = (props) => {
  let state = props.store.getState().dialogsReducer;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewAuthorChange = (author: string) => {
    props.store.dispatch(updateNewMessageAuthorCreator(author))
  }
  const onNewMessageChange = (body: string) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return <Dialogs updateNewMessageBody={onNewMessageChange}
                  updateNewMessageAuthor={onNewAuthorChange}
                  sendMessage={onSendMessageClick}
                  dialogsPage={state}/>
}

export default DialogsContainer;