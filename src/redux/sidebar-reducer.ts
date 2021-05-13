import {ActionTypes, sidebarType} from '../types/entities';

let initialState: sidebarType = {
  friends: [
    { name: 'Liza', avatar: 'img/ava.png' },
    { name: 'Masha', avatar: 'img/ava.png' },
    { name: 'Diana', avatar: 'img/ava.png' }
  ]
}

const sidebarReducer = (state = initialState, action: ActionTypes) => {

  return state;
}

export default sidebarReducer;