import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {DialogsContainer} from "./DialogsContainer";
import {ReduxStoreProviderDecorator} from "../../redux/ReduxStoreProviderDecorator";


export default {
  title: 'Social Network/Dialogs',
  component: DialogsContainer,
  decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof DialogsContainer>;

const Template: ComponentStory<typeof DialogsContainer> = () => <DialogsContainer />;

export const DialogsStories = Template.bind({});