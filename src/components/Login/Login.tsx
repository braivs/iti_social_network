import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {LoginPropsType} from "./LoginContainer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberBe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberBe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        debugger
        console.log(formData)
        props.loginUser(formData.login, formData.password, formData.rememberBe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}