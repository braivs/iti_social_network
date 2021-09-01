import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css'
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

  const addNewPost = (values: FormDataType) => {
    props.addPost(values.newPostBody)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostFormRedux onSubmit={addNewPost}/>
      </div>
      <div>
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    </div>
  )
}

type FormDataType = {
  newPostBody: string
}

const addPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field component={'textarea'} name={'newPostBody'} placeholder='Enter your post'/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm<FormDataType>({form: 'myPostsAddPostForm'})(addPostForm)