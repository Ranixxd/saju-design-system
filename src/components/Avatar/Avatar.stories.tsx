import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    name: { control: 'text' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: '사용자 프로필',
    size: 'md',
  },
};

export const WithInitials: Story = {
  args: { name: '김민준', size: 'md' },
};

export const Fallback: Story = {
  args: { name: '박서연', size: 'md' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar name="홍길동" size="xs" />
      <Avatar name="홍길동" size="sm" />
      <Avatar name="홍길동" size="md" />
      <Avatar name="홍길동" size="lg" />
      <Avatar name="홍길동" size="xl" />
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      {['김민준', '이서연', '박지훈', '최유나', '정도현', '한소희'].map((name) => (
        <Avatar key={name} name={name} size="md" />
      ))}
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      {['김민준', '이서연', '박지훈', '최유나'].map((name, i) => (
        <div key={name} style={{ marginLeft: i > 0 ? '-8px' : 0, zIndex: 4 - i, position: 'relative' }}>
          <Avatar name={name} size="md" />
        </div>
      ))}
      <div style={{ marginLeft: '-8px', position: 'relative' }}>
        <Avatar name="+12" size="md" />
      </div>
    </div>
  ),
};
