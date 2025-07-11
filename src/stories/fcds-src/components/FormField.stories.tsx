import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../../../fcds-src/components/FormField';

const meta: Meta<typeof FormField> = {
  title: 'FCDS Components/FormField',
  component: FormField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/design/tiGtyc8Fom1Iw7HrTGFm7y?node-id=24883:3496',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof FormField> = {
  render: () => <FormField />,
}; 