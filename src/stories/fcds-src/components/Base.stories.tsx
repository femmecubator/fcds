import type { Meta, StoryObj } from '@storybook/react';
import Base from '../../../fcds-src/components/Base';

const meta: Meta<typeof Base> = {
  title: 'FCDS Components/Base',
  component: Base,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24955:9384',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Base> = {
  render: () => <Base />,
}; 