import type { Meta, StoryObj } from '@storybook/react';
import Tab from '../../../fcds-src/components/Tab';

const meta: Meta<typeof Tab> = {
  title: 'FCDS Components/Tab',
  component: Tab,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6218',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Tab> = {
  render: () => <Tab />,
}; 