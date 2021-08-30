import React from 'react';
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Login} from "./Login";

export type FormDataType = {
  login: string
  password: string
  rememberBe: boolean
}

class LoginContainer extends React.Component {


  render() {
    return <Login />
  }
}

export default LoginContainer

