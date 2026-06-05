import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isError: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: '동의합니다' },
};

export const Checked: Story = {
  args: { label: '선택됨', defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { label: '부분 선택', indeterminate: true },
};

export const WithHelperText: Story = {
  args: {
    label: '마케팅 수신 동의',
    helperText: '이벤트 및 프로모션 정보를 받겠습니다',
  },
};

export const Error: Story = {
  args: {
    label: '이용약관에 동의합니다',
    isError: true,
    errorMessage: '필수 항목입니다',
  },
};

export const Disabled: Story = {
  args: { label: '비활성', disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: '비활성 선택됨', disabled: true, defaultChecked: true },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600, color: '#111827' }}>
        관심사 선택
      </p>
      <Checkbox label="기술 / 개발" defaultChecked />
      <Checkbox label="디자인" defaultChecked />
      <Checkbox label="비즈니스" />
      <Checkbox label="마케팅" />
    </div>
  ),
};
