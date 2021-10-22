import ava from '../assets/images/ava.png'

type FriendsType = {
  id: number
  name: string,
  avatar: string
}
let initialState = {
  friends: [
    { id: 1, name: 'Liza', avatar: ava},
    { id: 2, name: 'Masha', avatar: ava},
    { id: 3, name: 'Diana', avatar: ava},
  ] as Array<FriendsType>
}

export type InitialStateSidebarType = typeof initialState

export const sidebarReducer = (state = initialState, action: SidebarActionTypes): InitialStateSidebarType => {

  return state;
}

export type SidebarActionTypes = {}
