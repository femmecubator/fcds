import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../../fcds-src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'FCDS Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=3:1426',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  render: () => <Button />,
}; 