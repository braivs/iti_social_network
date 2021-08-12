import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {DialogItem} from "./DialogItem";
import {HashRouter} from "react-router-dom";


export default {
  title: 'Social Network/DialogItem',
  component: DialogItem,
} as ComponentMeta<typeof DialogItem>;

const Template: ComponentStory<typeof DialogItem> = () => <HashRouter><DialogItem name={'Name'}  id={1}/></HashRouter>;

export const DialogItemStories = Template.bind({});