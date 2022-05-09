// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ActionsHeaderSection} from "./actions-header.section";
import {PageHeaderElement} from "../../../elements/label/page-header/page-header.element";
import {ActionButtonElement} from "../../../elements/button/action-button/action-button.element";
import {FilterTextboxComponent} from "../../../components/filter-textbox/filter-textbox.component";
import {IconElement} from "../../../elements/img/icon/icon.element";
import {TextboxElement} from "../../../elements/input/textbox/textbox.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Section/ViewItems/Actions Header',
  component: ActionsHeaderSection,
  decorators: [
    moduleMetadata({
      declarations: [ActionButtonElement, PageHeaderElement, FilterTextboxComponent, IconElement, TextboxElement],
      imports: [CommonModule],
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    clickControlRules: { action: 'clickControlRules' },
    clickActionRules: { action: 'clickActionRules' }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ActionsHeaderSection> = (args: ActionsHeaderSection) => ({
  props: args,
});

export const ActionsHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ActionsHeader.args = {
};
