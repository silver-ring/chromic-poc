// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {CaughtInHeaderComponent} from "./caught-in-header.component";
import {HeaderTextboxElement} from "../../elements/input/header-textbox/header-textbox.element";
import {TableHeaderElement} from "../../elements/label/table-header/table-header.element";


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
const storyMeta: Meta = {
  title: 'Components/Caught In Header',
  component: CaughtInHeaderComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  decorators: [
    moduleMetadata({
      declarations: [HeaderTextboxElement, TableHeaderElement],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    placeholder: {
      control: {
        type: 'text'
      }
    },
    clickControlRules: {action: 'clickControlRules'},
    clickActionRules: {action: 'clickActionRules'}
  },
}

export default storyMeta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CaughtInHeaderComponent> = (args: CaughtInHeaderComponent) => ({
  props: args,
});

export const CaughtInHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
CaughtInHeader.args = {};
