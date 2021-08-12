import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Provider} from "react-redux";
import {store} from "../../redux/redux-store";
import {HashRouter} from "react-router-dom";
import {DialogsContainer} from "./DialogsContainer";


export default {
  title: 'Social Network/Dialogs',
  component: DialogsContainer,
} as ComponentMeta<typeof DialogsContainer>;

const Template: ComponentStory<typeof DialogsContainer> = () => <HashRouter><Provider store={store}><DialogsContainer /></Provider></HashRouter>;

export const DialogsStories = Template.bind({});