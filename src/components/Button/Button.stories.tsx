import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: '버튼 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기',
    },
    loading: { control: 'boolean', description: '로딩 상태' },
    disabled: { control: 'boolean', description: '비활성 상태' },
    fullWidth: { control: 'boolean', description: '전체 너비' },
    children: { control: 'text', description: '버튼 텍스트' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Button' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Button' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline Button' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost Button' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Delete' },
};

export const Loading: Story = {
  args: { variant: 'primary', children: 'Saving...', loading: true },
};

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Disabled', disabled: true },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Add Item',
    leftIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'outline',
    children: 'Next',
    rightIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
