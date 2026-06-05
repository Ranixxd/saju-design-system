import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const fruitOptions = [
  { label: '사과', value: 'apple' },
  { label: '바나나', value: 'banana' },
  { label: '오렌지', value: 'orange' },
  { label: '포도', value: 'grape' },
  { label: '딸기', value: 'strawberry' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    isError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { options: fruitOptions, placeholder: '선택하세요' },
};

export const WithLabel: Story = {
  args: { label: '과일 선택', options: fruitOptions, placeholder: '과일을 선택하세요' },
};

export const Error: Story = {
  args: {
    label: '카테고리',
    options: fruitOptions,
    errorMessage: '항목을 선택해주세요',
    isError: true,
  },
};

export const Disabled: Story = {
  args: { label: '비활성', options: fruitOptions, disabled: true },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '280px' }}>
      <Select size="sm" options={fruitOptions} placeholder="Small" />
      <Select size="md" options={fruitOptions} placeholder="Medium" />
      <Select size="lg" options={fruitOptions} placeholder="Large" />
    </div>
  ),
};
