import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../../../fcds-src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'FCDS Components/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=93:6604',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Badge> = {
  render: () => <Badge />,
}; 