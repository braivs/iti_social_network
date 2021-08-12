import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MyPostsContainer} from "./MyPostsContainer";
import {ReduxStoreProviderDecorator} from "../../../redux/ReduxStoreProviderDecorator";


export default {
  title: 'Social Network/Post',
  component: MyPostsContainer,
  decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof MyPostsContainer>;

const Template: ComponentStory<typeof MyPostsContainer> = () => <MyPostsContainer />;

export const MyPostsContainerStories = Template.bind({});