import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {authenticate} from "../../redux/auth-reducer";

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}
type MapDispatchPropsType = {
  authenticate: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    this.props.authenticate()
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {authenticate})(HeaderContainer)