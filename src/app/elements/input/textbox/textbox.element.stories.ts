// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {TextboxElement} from "./textbox.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Input/Textbox',
  component: TextboxElement,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    placeholder: {
      control: {
        type: 'text'
      }
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TextboxElement> = (args: TextboxElement) => ({
  props: args,
});

export const Textbox = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Textbox.args = {
  placeholder: 'this is a placeholder',
};
