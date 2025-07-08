import type { Meta, StoryObj } from '@storybook/react';
import { FigmaTest } from '../../examples/FigmaTest';

const meta: Meta<typeof FigmaTest> = {
  title: 'Examples/FigmaTest',
  component: FigmaTest,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 