// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ItemsTableSection} from "../../sections/view-items/items-table/items-table.section";
import {ActionsHeaderSection} from "../../sections/view-items/actions-header/actions-header.section";
import {ActionButtonElement} from "../../elements/button/action-button/action-button.element";
import {PageHeaderElement} from "../../elements/label/page-header/page-header.element";
import {FilterTextboxComponent} from "../../components/filter-textbox/filter-textbox.component";
import {IconElement} from "../../elements/img/icon/icon.element";
import {TextboxElement} from "../../elements/input/textbox/textbox.element";
import {ListPolicyActionsPage} from "./list-policy-actions.page";
import {ViewItemsTemplate} from "../../templates/view-items/view-items.template";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Pages/List Policy Actions',
  component: ListPolicyActionsPage,
  decorators: [
    moduleMetadata({
      declarations: [ViewItemsTemplate, ActionsHeaderSection, ItemsTableSection, ActionButtonElement, PageHeaderElement, FilterTextboxComponent, IconElement, TextboxElement],
      imports: [CommonModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ListPolicyActionsPage> = (args: ListPolicyActionsPage) => ({
  props: args,
});

export const ListPolicyActions = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ListPolicyActions.args = {
};
