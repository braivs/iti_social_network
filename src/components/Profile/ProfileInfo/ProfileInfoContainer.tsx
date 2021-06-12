import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';
import {topType} from '../../../types/entities';
import {AppStateType} from '../../../redux/redux-store';

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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    top: state.profilePage.top
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)

export default ProfileInfoContainer;