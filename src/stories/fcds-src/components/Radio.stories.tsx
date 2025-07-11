import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../../../fcds-src/components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'FCDS Components/Radio',
  component: Radio,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6217',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Radio> = {
  render: () => <Radio />,
}; 