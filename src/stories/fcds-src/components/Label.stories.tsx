import type { Meta, StoryObj } from '@storybook/react';
import Label from '../../../fcds-src/components/Label';

const meta: Meta<typeof Label> = {
  title: 'FCDS Components/Label',
  component: Label,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24955:11569',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Label> = {
  render: () => <Label />,
}; 