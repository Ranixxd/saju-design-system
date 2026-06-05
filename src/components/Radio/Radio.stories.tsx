import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: '선택 항목' },
};

export const Checked: Story = {
  args: { label: '선택됨', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: '비활성', disabled: true },
};

export const Group: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup
      name="plan"
      label="요금제 선택"
      options={[
        { label: '무료 (월 0원)', value: 'free' },
        { label: '베이직 (월 9,900원)', value: 'basic' },
        { label: '프로 (월 29,900원)', value: 'pro' },
        { label: '엔터프라이즈 (문의)', value: 'enterprise', disabled: true },
      ]}
      defaultValue="basic"
    />
  ),
};

export const GroupWithError: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup
      name="color"
      label="색상 선택"
      options={[
        { label: '빨강', value: 'red' },
        { label: '파랑', value: 'blue' },
        { label: '초록', value: 'green' },
      ]}
      isError
      errorMessage="색상을 선택해주세요"
    />
  ),
};
