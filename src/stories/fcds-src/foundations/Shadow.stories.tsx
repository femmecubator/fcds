import type { Meta, StoryObj } from '@storybook/react';
import Shadow from '../../../fcds-src/foundations/Shadow';

const meta: Meta<typeof Shadow> = {
  title: 'FCDS Foundations/Shadow',
  component: Shadow,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24877:729',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Shadow> = {
  render: () => <Shadow />,
}; 