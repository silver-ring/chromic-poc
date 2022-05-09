// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {ItemsTableSection} from "./items-table.section";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {TableHeaderElement} from "../../../elements/label/table-header/table-header.element";
import {TextboxElement} from "../../../elements/input/textbox/textbox.element";
import {CaughtInHeaderComponent} from "../../../components/caught-in-header/caught-in-header.component";
import {HeaderTextboxElement} from "../../../elements/input/header-textbox/header-textbox.element";


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
const storyMeta: Meta = {
  title: 'Section/ViewItems/Items Table',
  component: ItemsTableSection,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  decorators: [
    moduleMetadata({
      declarations: [TableHeaderElement, TextboxElement, CaughtInHeaderComponent, HeaderTextboxElement],
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
const Template: Story<ItemsTableSection> = (args: ItemsTableSection) => ({
  props: args,
});

export const ItemsTable = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ItemsTable.args = {};
