import type { Meta, StoryObj } from '@storybook/react';
import Icons from '../../../fcds-src/foundations/Icons';

const meta: Meta<typeof Icons> = {
  title: 'FCDS Foundations/Icons',
  component: Icons,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24885:10',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Icons> = {
  render: () => <Icons />,
}; 