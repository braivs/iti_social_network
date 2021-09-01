import React from 'react';
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";



type MapStatePropsType = { }
type MapDispatchPropsType = {
  loginUser: (email: string, password: string, rememberMe: boolean) => void
}
export type LoginPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = () => { }

class LoginContainer extends React.Component<LoginPropsType> {


  render() {
    return <Login loginUser={this.props.loginUser}/>
  }
}

export default connect(mapStateToProps,{loginUser})(LoginContainer)

