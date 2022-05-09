// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {PageHeaderElement} from "./page-header.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Label/Page Header',
  component: PageHeaderElement,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<PageHeaderElement> = (args: PageHeaderElement) => ({
  props: args,
});

export const PageHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
PageHeader.args = {
  text: 'Header',
};
