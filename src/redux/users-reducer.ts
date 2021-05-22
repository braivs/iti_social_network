import {ActionTypes, profilePageType} from '../types/entities';

let initialState = {
  users: [
    {id: 1, name: 'Dmitry K.', status: 'I am looking for a Job right now...',
      location: {country: 'Belarus', city: 'Minsk'}, follow: false},
    {id: 2, name: 'Svetlana D.', status: 'I am so pretty',
      location: {country: 'Belarus', city: 'Minsk'}, follow: false},
    {id: 3, name: 'Sergei S.', status: 'I like football!!!',
      location: {country: 'Ukraine', city: 'Kiev'}, follow: true},
    {id: 4, name: 'Andrew T.', status: 'I am free to help you to create Video Production',
      location: {country: 'United States', city: 'Philadelphia'}, follow: true},

  ]
}

const usersReducer = (state = initialState, action: ActionTypes): profilePageType => {
  switch (action.type) {
    default:
      return state;
  }
}


// Action Creators:
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: text
} as const)

export default usersReducer


