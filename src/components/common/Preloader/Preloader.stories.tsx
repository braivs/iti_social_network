import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Preloader} from "./Preloader";


export default {
  title: 'Social Network/Preloader',
  component: Preloader,
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = () => <Preloader />;

export const PreloaderStories = Template.bind({});