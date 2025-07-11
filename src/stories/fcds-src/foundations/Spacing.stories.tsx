import type { Meta, StoryObj } from '@storybook/react';
import Spacing from '../../../fcds-src/foundations/Spacing';

const meta: Meta<typeof Spacing> = {
  title: 'FCDS Foundations/Spacing',
  component: Spacing,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24877:579',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Spacing> = {
  render: () => <Spacing />,
}; 