import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css'
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

  const onAddPost = (values: FormDataType) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div>
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    </div>
  )
}

type FormDataType = {
  newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPostText'} placeholder='Post message'
               validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'myPostsAddPostForm'})(AddNewPostForm)