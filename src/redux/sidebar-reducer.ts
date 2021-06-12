import {ActionTypes} from '../types/entities';

type FriendsType = {
  id: number
  name: string,
  avatar: string
}
export type SidebarType = {
  friends: Array<FriendsType>
}

let initialState: SidebarType = {
  friends: [
    { id: 1, name: 'Liza', avatar: 'img/ava.png' },
    { id: 2, name: 'Masha', avatar: 'img/ava.png' },
    { id: 3, name: 'Diana', avatar: 'img/ava.png' }
  ]
}

const sidebarReducer = (state: SidebarType = initialState, action: ActionTypes): SidebarType => {

  return state;
}

export default sidebarReducer;