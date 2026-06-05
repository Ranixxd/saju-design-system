import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    shadow: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    bordered: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    padding: 'md',
    shadow: 'sm',
    bordered: true,
    children: '카드 내용이 여기에 들어갑니다.',
  },
};

export const WithSections: Story = {
  render: () => (
    <Card padding="none" style={{ width: '360px' }}>
      <CardHeader>프로필</CardHeader>
      <CardBody>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar name="김민준" size="lg" />
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '16px' }}>김민준</p>
            <p style={{ margin: '2px 0 0', fontSize: '14px', color: '#6B7280' }}>Senior Designer</p>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="outline" size="sm" fullWidth>메시지</Button>
          <Button variant="primary" size="sm" fullWidth>팔로우</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card padding="none" hoverable style={{ width: '280px' }}>
      <div style={{ height: '180px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '48px' }}>🎨</span>
      </div>
      <CardBody>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>디자인 시스템 키트</h3>
          <Badge variant="success">New</Badge>
        </div>
        <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#6B7280', lineHeight: 1.5 }}>
          재사용 가능한 컴포넌트 라이브러리입니다.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: '18px', color: '#2563EB' }}>₩29,900</span>
          <Button size="sm" variant="primary">구매하기</Button>
        </div>
      </CardBody>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '600px' }}>
      {[
        { label: '총 사용자', value: '12,340', change: '+12%', color: '#2563EB' },
        { label: '월 매출', value: '₩4.2M', change: '+8.1%', color: '#16A34A' },
        { label: '전환율', value: '3.6%', change: '-0.4%', color: '#E11D48' },
      ].map((stat) => (
        <Card key={stat.label} padding="md">
          <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#6B7280', fontWeight: 500 }}>{stat.label}</p>
          <p style={{ margin: '0 0 4px', fontSize: '24px', fontWeight: 700, color: '#111827' }}>{stat.value}</p>
          <p style={{ margin: 0, fontSize: '12px', color: stat.change.startsWith('+') ? '#16A34A' : '#E11D48' }}>
            {stat.change} 전월 대비
          </p>
        </Card>
      ))}
    </div>
  ),
};
