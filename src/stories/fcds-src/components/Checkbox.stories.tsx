import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../../fcds-src/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'FCDS Components/Checkbox',
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6216',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  render: () => <Checkbox />,
}; 