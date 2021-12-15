import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: null | string
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({handleSubmit, error}) => {

    const captchaUrl = useSelector<AppRootStateType, null | string>(state => state.auth.captchaUrl)

    return (
        <form onSubmit={handleSubmit}>

            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberBe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} alt={'captchaUrl'}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
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
    captcha: string | null
}
const LoginReduxForm = reduxForm<LoginFormValuesType>({form: 'login'})(LoginForm)

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)

// todo: redirect after logout to login form