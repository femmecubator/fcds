import type { Meta, StoryObj } from '@storybook/react';
import Multiselect from '../../../fcds-src/components/Multiselect';

const meta: Meta<typeof Multiselect> = {
  title: 'FCDS Components/Multiselect',
  component: Multiselect,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24942:22710',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Multiselect> = {
  render: () => <Multiselect />,
}; 