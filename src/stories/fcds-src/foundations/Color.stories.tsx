import type { Meta, StoryObj } from '@storybook/react';
import Color from '../../../fcds-src/foundations/Color';

const meta: Meta<typeof Color> = {
  title: 'FCDS Foundations/Color',
  component: Color,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=3:2',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Color> = {
  render: () => <Color />,
}; 