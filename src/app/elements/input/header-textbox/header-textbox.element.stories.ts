// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {HeaderTextboxElement} from "./header-textbox.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Input/Header Textbox',
  component: HeaderTextboxElement,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<HeaderTextboxElement> = (args: HeaderTextboxElement) => ({
  props: args,
});

export const HeaderTextbox = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
HeaderTextbox.args = {
};
