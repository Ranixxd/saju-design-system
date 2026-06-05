import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'primary', 'success', 'warning', 'danger', 'info'] },
    size: { control: 'select', options: ['sm', 'md'] },
    dot: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Badge' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="neutral" dot>Neutral</Badge>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="danger" dot>Failed</Badge>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      {[
        { name: '주문 완료', badge: <Badge variant="success">완료</Badge> },
        { name: '배송 중', badge: <Badge variant="info" dot>배송중</Badge> },
        { name: '결제 실패', badge: <Badge variant="danger">실패</Badge> },
        { name: '검토 대기', badge: <Badge variant="warning" dot>대기</Badge> },
      ].map((item) => (
        <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
          <span style={{ fontSize: '14px', color: '#374151' }}>{item.name}</span>
          {item.badge}
        </div>
      ))}
    </div>
  ),
};
