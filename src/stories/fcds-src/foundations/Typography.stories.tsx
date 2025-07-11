import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../../../fcds-src/foundations/Typography';

const meta: Meta<typeof Typography> = {
  title: 'FCDS Foundations/Typography',
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=3:916',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Typography> = {
  render: () => <Typography />,
}; 