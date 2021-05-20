import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';
import {topType} from '../../../types/entities';
import {ReduxStateType} from '../../../redux/redux-store';

/*export const ProfileInfoContainer: React.FC<ProfileInfoType> = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().profileReducer.top

          return <ProfileInfo top={state}/>
        }
      }
    </StoreContext.Consumer>
  )
}*/

type mapStateToPropsType = {
  top: topType
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    top: state.profileReducer.top
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)

export default ProfileInfoContainer;