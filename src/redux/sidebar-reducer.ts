import {ActionTypes, sidebarType} from '../types/entities';

let initialState: sidebarType = {
  friends: [
    { id: 1, name: 'Liza', avatar: 'img/ava.png' },
    { id: 2, name: 'Masha', avatar: 'img/ava.png' },
    { id: 3, name: 'Diana', avatar: 'img/ava.png' }
  ]
}

const sidebarReducer = (state = initialState, action: ActionTypes) => {

  return state;
}

export default sidebarReducer;