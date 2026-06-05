import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    variant: { control: 'select', options: ['primary', 'white', 'neutral'] },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: 'md', variant: 'primary' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner variant="primary" />
      <Spinner variant="neutral" />
      <div style={{ background: '#1F2937', padding: '12px', borderRadius: '8px' }}>
        <Spinner variant="white" />
      </div>
    </div>
  ),
};
