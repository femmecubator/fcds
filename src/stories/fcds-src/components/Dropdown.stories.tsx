import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../../../fcds-src/components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'FCDS Components/Dropdown',
  component: Dropdown,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24942:2335',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Dropdown> = {
  render: () => <Dropdown />,
}; 