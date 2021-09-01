import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
  let messagesElements = state.messages.map(m =>
    <Message key={m.id}
             message={m.message}
             avatar={m.avatar}
    />)

  const addNewMessage = (values: FormDataType) => {
    props.sendMessage(values.newMessageBody);
  }

  // if (!props.isAuth) return <Redirect to={'/login'}/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  )
}

type FormDataType = {
  newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form className={s.newMessageContainer} onSubmit={props.handleSubmit}>
      <div className={s.newMessageText}>
        <div>
          <Field component={'textarea'} name={'newMessageBody'} placeholder="Enter your message" />
        </div>
        <div><button>Send</button></div>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)