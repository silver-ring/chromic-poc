// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {FilterTextboxComponent} from "./filter-textbox.component";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {IconElement} from "../../elements/img/icon/icon.element";
import {TextboxElement} from "../../elements/input/textbox/textbox.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Filter Textbox',
  component: FilterTextboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconElement, TextboxElement],
      imports: [CommonModule],
    }),
  ],
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
const Template: Story<FilterTextboxComponent> = (args: FilterTextboxComponent) => ({
  props: args,
});

export const FilterTextbox = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
FilterTextbox.args = {
  placeholder: 'Filter by keyword...',
};
