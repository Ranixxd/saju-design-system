import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    isError: { control: 'boolean' },
    isSuccess: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: '텍스트를 입력하세요' },
};

export const WithLabel: Story = {
  args: { label: '이메일', placeholder: 'example@email.com', type: 'email' },
};

export const WithHelperText: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호 입력',
    helperText: '8자 이상, 영문/숫자/특수문자를 포함해주세요',
  },
};

export const Error: Story = {
  args: {
    label: '이메일',
    placeholder: 'example@email.com',
    value: 'invalid-email',
    errorMessage: '올바른 이메일 형식이 아닙니다',
  },
};

export const Success: Story = {
  args: {
    label: '사용자명',
    value: 'johndoe',
    isSuccess: true,
    helperText: '사용 가능한 아이디입니다',
  },
};

export const Disabled: Story = {
  args: { label: '비활성', value: '수정 불가', disabled: true },
};

export const WithLeftAddon: Story = {
  args: {
    label: '검색',
    placeholder: '검색어 입력',
    leftAddon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
};

export const WithRightAddon: Story = {
  args: {
    label: '금액',
    placeholder: '0',
    type: 'number',
    rightAddon: <span style={{ fontSize: '13px', color: '#6B7280' }}>원</span>,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};
