import React from 'react';
import StoreContext from '../../../StoreContext';
import ProfileInfo from './ProfileInfo';

type ProfileInfoType = {
  // top: topType
}

export const ProfileInfoContainer: React.FC<ProfileInfoType> = () => {
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
}

export default ProfileInfoContainer;