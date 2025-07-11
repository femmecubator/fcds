import type { Meta, StoryObj } from '@storybook/react';
import Tags from '../../../fcds-src/components/Tags';

const meta: Meta<typeof Tags> = {
  title: 'FCDS Components/Tags',
  component: Tags,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24940:6219',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Tags> = {
  render: () => <Tags />,
}; 