import React from 'react';
import { StoryFn } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header
};

const Template: StoryFn<{ dark: boolean }> = (args) => (
  <Header {...args} toggleTheme={() => {}} />
);

export const Light = Template.bind({});
Light.args = {
  dark: false
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true
};
