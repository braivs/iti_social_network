import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       validate={[required]}
                       component={Input}
                       type={'password'}
                />
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberBe'} component={Input}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType,string> //for create fields (in future)

const LoginReduxForm = reduxForm<LoginFormValuesType>({form: 'login'})(LoginForm)

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppRootStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)