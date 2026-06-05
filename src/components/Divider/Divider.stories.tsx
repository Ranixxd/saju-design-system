import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    label: { control: 'text' },
  },
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <p style={{ margin: '0 0 16px', fontSize: '14px' }}>위 섹션</p>
      <Divider />
      <p style={{ margin: '16px 0 0', fontSize: '14px' }}>아래 섹션</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <p style={{ margin: '0 0 16px', fontSize: '14px' }}>소셜 로그인</p>
      <Divider label="또는" />
      <p style={{ margin: '16px 0 0', fontSize: '14px' }}>이메일로 계속하기</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '32px', gap: '8px' }}>
      <span style={{ fontSize: '14px' }}>홈</span>
      <Divider orientation="vertical" />
      <span style={{ fontSize: '14px' }}>제품</span>
      <Divider orientation="vertical" />
      <span style={{ fontSize: '14px' }}>회사</span>
    </div>
  ),
};
