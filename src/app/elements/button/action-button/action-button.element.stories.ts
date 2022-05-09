// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ActionButtonElement} from "./action-button.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button/Action Button',
  component: ActionButtonElement,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    click: { action: 'click' }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ActionButtonElement> = (args: ActionButtonElement) => ({
  props: args,
});

export const ActionButton = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ActionButton.args = {
  label: 'Button',
};
