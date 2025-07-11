import type { Meta, StoryObj } from '@storybook/react';
import SegmentedTab from '../../../fcds-src/components/SegmentedTab';

const meta: Meta<typeof SegmentedTab> = {
  title: 'FCDS Components/SegmentedTab',
  component: SegmentedTab,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24964:20665',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof SegmentedTab> = {
  render: () => <SegmentedTab />,
}; 