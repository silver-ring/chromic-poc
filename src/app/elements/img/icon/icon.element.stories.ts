// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {IconElement} from "./icon.element";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Img/Icon',
  component: IconElement,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    source: {
      control: {
        type: 'text'
      }
    },
    alt: {
      control: {
        type: 'text'
      }
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<IconElement> = (args: IconElement) => ({
  props: args,
});

export const Icon = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Icon.args = {
  source: '../../../../assets/filter_icon.svg',
  alt: 'filter icon'
};
