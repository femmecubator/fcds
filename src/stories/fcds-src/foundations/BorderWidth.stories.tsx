import type { Meta, StoryObj } from '@storybook/react';
import BorderWidth from '../../../fcds-src/foundations/BorderWidth';

const meta: Meta<typeof BorderWidth> = {
  title: 'FCDS Foundations/BorderWidth',
  component: BorderWidth,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24900:748',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof BorderWidth> = {
  render: () => <BorderWidth />,
}; 