// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {TableHeaderElement} from "./table-header.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Label/Table Header',
  component: TableHeaderElement,
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
const Template: Story<TableHeaderElement> = (args: TableHeaderElement) => ({
  props: args,
});

export const TableHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TableHeader.args = {
  text: 'Header',
};
