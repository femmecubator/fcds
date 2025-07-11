import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '../../../fcds-src/components/Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'FCDS Components/Toggle',
  component: Toggle,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24944:28856',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Toggle> = {
  render: () => <Toggle />,
}; 