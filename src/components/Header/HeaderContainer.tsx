import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Header} from "./Header";

type PathParamsType = {

}

// export type HeaderPropsType = RouteComponentProps<PathParamsType>

export class HeaderContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    return <Header {...this.props} />
  }

}