// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ActionButtonComponent} from "./action-button.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Common/Buttons/Action Button',
  component: ActionButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ActionButtonComponent> = (args: ActionButtonComponent) => ({
  props: args,
});

export const ActionButton = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ActionButton.args = {
  label: 'Button',
};
