import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Post from "./Post";


export default {
  title: 'Social Network/Post',
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = () => <Post message={'text of message'} likesCount={0}/>;

export const DialogItemStories = Template.bind({});