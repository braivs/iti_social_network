import {DialogsPageType, sendMessage} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";
import {ComponentType} from "react";

type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
  sendMessage: (newMessageBody: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessage(newMessageBody))
    }
  }
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)