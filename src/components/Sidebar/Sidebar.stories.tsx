import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SidebarContainer} from "./SidebarContainer";
import {ReduxStoreProviderDecorator} from "../../redux/ReduxStoreProviderDecorator";


export default {
  title: 'Social Network/Sidebar',
  component: SidebarContainer,
  decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof SidebarContainer>;

const Template: ComponentStory<typeof SidebarContainer> = () => <SidebarContainer />;

export const SidebarStories = Template.bind({});