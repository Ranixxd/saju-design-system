import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { label: '알림 받기' },
};

export const Checked: Story = {
  args: { label: '활성화됨', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: '비활성', disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: '비활성 (켜짐)', disabled: true, defaultChecked: true },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle size="sm" label="Small" />
      <Toggle size="md" label="Medium" />
      <Toggle size="lg" label="Large" />
    </div>
  ),
};

export const SettingsList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
      {[
        { label: '이메일 알림', checked: true },
        { label: '푸시 알림', checked: true },
        { label: 'SMS 수신', checked: false },
        { label: '마케팅 정보 수신', checked: false },
      ].map((item) => (
        <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#374151' }}>{item.label}</span>
          <Toggle defaultChecked={item.checked} />
        </div>
      ))}
    </div>
  ),
};
