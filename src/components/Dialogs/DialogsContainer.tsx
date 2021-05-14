import React from 'react';

import {
  sendMessageCreator,
  updateNewMessageAuthorCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

type DialogsType = {
  // store: ReduxStoreType
}

const DialogsContainer: React.FC<DialogsType> = () => {
  return <StoreContext.Consumer>
    {
    (store) => {
      let state = store.getState().dialogsReducer;
      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
      }
      const onNewAuthorChange = (author: string) => {
        store.dispatch(updateNewMessageAuthorCreator(author))
      }
      const onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyCreator(body))
      }
      return <Dialogs updateNewMessageBody={onNewMessageChange}
                      updateNewMessageAuthor={onNewAuthorChange}
                      sendMessage={onSendMessageClick}
                      dialogsPage={state}/>
    }
  }
  </StoreContext.Consumer>
}

export default DialogsContainer;