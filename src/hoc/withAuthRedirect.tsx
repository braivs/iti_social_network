import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

type MapStatePropsType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppRootStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

  class RedirectComponent extends React.Component<MapStatePropsType> {
    render() {
      let {isAuth, ...restProps} = this.props

      if (!isAuth) return <Redirect to={'/login'}/>

      return <Component {...restProps as T}/>
    }
  }

  let ConneсtedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConneсtedAuthRedirectComponent
}