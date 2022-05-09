// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ViewItemsTemplate} from "./view-items.template";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ItemsTableSection} from "../../sections/view-items/items-table/items-table.section";
import {ActionsHeaderSection} from "../../sections/view-items/actions-header/actions-header.section";
import {ActionButtonElement} from "../../elements/button/action-button/action-button.element";
import {PageHeaderElement} from "../../elements/label/page-header/page-header.element";
import {FilterTextboxComponent} from "../../components/filter-textbox/filter-textbox.component";
import {IconElement} from "../../elements/img/icon/icon.element";
import {TextboxElement} from "../../elements/input/textbox/textbox.element";
import {HeaderTextboxElement} from "../../elements/input/header-textbox/header-textbox.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Templates/View Items',
  component: ViewItemsTemplate,
  decorators: [
    moduleMetadata({
      declarations: [ActionsHeaderSection, ItemsTableSection, ActionButtonElement, PageHeaderElement, FilterTextboxComponent, IconElement, TextboxElement],
      imports: [CommonModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ViewItemsTemplate> = (args: ViewItemsTemplate) => ({
  props: args,
});

export const ViewItems = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ViewItems.args = {
};
