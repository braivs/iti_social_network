import React from 'react';
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {FormDataType} from "./LoginContainer";

/*type PropsType = {
  onSubmit:(formData: FormDataType) => void
}*/

const LoginForm: React.FC<InjectedFormProps<FormDataType>>  = (props) => {
  return (
    <form>
      <div>
        <Field placeholder={'Login'} name={'login'} component={"input"}/>
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={"input"}/>
      </div>
      <div>
        <Field type={"checkbox"} name={'rememberBe'} component={'input'}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    debugger
    console.log(formData)
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}