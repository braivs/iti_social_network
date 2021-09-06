import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Dialogs.module.scss";
import {DialogsFormDataType} from "../Dialogs";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return (
        <form className={s.newMessageContainer} onSubmit={props.handleSubmit}>
            <div className={s.newMessageText}>
                <div>
                    <Field component={Textarea}
                           validate={[required, maxLength50]}
                           name={'newMessageBody'} placeholder="Enter your message"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm<DialogsFormDataType>({form: 'dialog-add-message-form'})(AddMessageForm)
