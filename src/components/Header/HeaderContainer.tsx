import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}
type MapDispatchToPropsType = {}

type MapDispatchToPropsTypeAPI = {
  setAuthUserData : (id: number, login: string, email: string) => void
}
type MapStateToPropsTypeAPI = { }

export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType
type HeaderAPIPropsType = MapDispatchToPropsTypeAPI & HeaderPropsType

class HeaderContainer extends React.Component<HeaderAPIPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
          this.props.setAuthUserData(id, login, email)
        }
      });
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType & MapStateToPropsTypeAPI => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)