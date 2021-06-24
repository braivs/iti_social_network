import {ActionTypes} from '../types/entities';
import ava from '../assets/images/ava.png'

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
    { id: 1, name: 'Liza', avatar: ava},
    { id: 2, name: 'Masha', avatar: ava},
    { id: 3, name: 'Diana', avatar: ava},
  ]
}

const sidebarReducer = (state: SidebarType = initialState, action: ActionTypes): SidebarType => {

  return state;
}

export default sidebarReducer;