import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: { content: '툴팁 내용입니다', placement: 'top' },
  render: (args) => (
    <div style={{ padding: '60px' }}>
      <Tooltip {...args}>
        <Button variant="secondary">마우스를 올려보세요</Button>
      </Tooltip>
    </div>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '80px' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <Tooltip key={placement} content={`${placement} 툴팁`} placement={placement}>
          <Button variant="outline" size="sm">{placement}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <div style={{ padding: '80px' }}>
      <Tooltip
        placement="top"
        content="이것은 좀 더 긴 툴팁 내용입니다. 여러 줄로 표시될 수 있습니다."
      >
        <Button variant="ghost">긴 툴팁</Button>
      </Tooltip>
    </div>
  ),
};
