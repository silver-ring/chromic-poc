// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PageHeaderComponent } from "./page-header.component";
import {FilterTextboxComponent} from "../../common/textbox/filter-textbox/filter-textbox.component";
import {ActionButtonComponent} from "../../common/buttons/action-button/action-button.component";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "../../common/typography/header/header.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'List Items/Page Header',
  component: PageHeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [ActionButtonComponent, FilterTextboxComponent, HeaderComponent],
      imports: [CommonModule],
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    placeholder: {
      control: {
        type: 'text'
      }
    },
    clickControlRules: { action: 'clickControlRules' },
    clickActionRules: { action: 'clickActionRules' }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<PageHeaderComponent> = (args: PageHeaderComponent) => ({
  props: args,
});

export const PageHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
PageHeader.args = {
  placeholder: 'Filter by keyword...',
};
