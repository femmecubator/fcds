import type { Meta, StoryObj } from '@storybook/react';
import Radius from '../../../fcds-src/foundations/Radius';

const meta: Meta<typeof Radius> = {
  title: 'FCDS Foundations/Radius',
  component: Radius,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24868:1010',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Radius> = {
  render: () => <Radius />,
}; 