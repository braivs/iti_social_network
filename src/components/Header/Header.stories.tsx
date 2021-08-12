import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import HeaderContainer from "./HeaderContainer";
import {ReduxStoreProviderDecorator} from "../../redux/ReduxStoreProviderDecorator";


export default {
  title: 'Social Network/Header',
  component: HeaderContainer,
  decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof HeaderContainer>;

const Template: ComponentStory<typeof HeaderContainer> = () => <HeaderContainer />

export const HeaderStories = Template.bind({});