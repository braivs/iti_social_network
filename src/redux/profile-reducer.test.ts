import ava from "../assets/images/ava.png";
import {
  addPost,
  ProfilePageType,
  profileReducer,
  profileType,
  setUserProfile,
  updateNewPostText
} from "./profile-reducer";
import mainImg from '../assets/images/main.jpg'

let startState: ProfilePageType

beforeEach(() => {
  startState =  {
    top: {
      imgSrc: mainImg,
      imgAlt: '',
      description: 'ava + description'
    },
    posts: [
      {id: 1, message: 'I will be React Developer!', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Bugaga', likesCount: 5},
      {id: 4, message: 'Dada', likesCount: 1}
    ],
    newPostText: 'testPostMessage',
    profile: null
  }
})

test('add post', () => {
  const endState = profileReducer(startState, addPost())

  expect(endState.posts.length).toBe(5)
})

test('set user profile', () => {
  //const endState = profileReducer(startState, setUserProfile())

  console.log('I don`t know how to write')
})

test('get user profile', () => {
  console.log('I don`t know how to write')
})

test('update new post text', () => {
  const endState = profileReducer(startState, updateNewPostText('updated text'))
  expect(endState.newPostText).toBe('updated text')
})