import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ReduxStoreProviderDecorator} from "../../redux/ReduxStoreProviderDecorator";
import ProfileContainer from "./ProfileContainer";


export default {
  title: 'Social Network/Profile',
  component: ProfileContainer,
  decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof ProfileContainer>;

const Template: ComponentStory<typeof ProfileContainer> = () => <ProfileContainer />

export const ProfileStories = Template.bind({});