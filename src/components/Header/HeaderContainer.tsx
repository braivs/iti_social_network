import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}
type MapDispatchToPropsType = {}

type MapDispatchToPropsTypeAPI = {
  setAuthUserData: (id: number, login: string, email: string) => void
}
type MapStateToPropsTypeAPI = {}

export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType
type HeaderAPIPropsType = MapDispatchToPropsTypeAPI & HeaderPropsType

class HeaderContainer extends React.Component<HeaderAPIPropsType> {
  componentDidMount() {
    usersAPI.auth()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data
          this.props.setAuthUserData(id, login, email)
        }
      });
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType & MapStateToPropsTypeAPI => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)