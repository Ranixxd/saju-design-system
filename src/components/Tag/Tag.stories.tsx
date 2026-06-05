import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'danger'] },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: '태그' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag variant="default">기본</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">완료</Tag>
      <Tag variant="warning">진행중</Tag>
      <Tag variant="danger">긴급</Tag>
    </div>
  ),
};

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = React.useState(['React', 'TypeScript', 'CSS', 'Storybook']);
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag key={tag} variant="primary" onRemove={() => setTags(tags.filter((t) => t !== tag))}>
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
};

export const InInput: Story = {
  render: () => {
    const [tags, setTags] = React.useState(['디자인', '개발']);
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        alignItems: 'center',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        padding: '8px 12px',
        width: '360px',
      }}>
        {tags.map((tag) => (
          <Tag key={tag} onRemove={() => setTags(tags.filter((t) => t !== tag))}>
            {tag}
          </Tag>
        ))}
        <input
          placeholder="태그 추가..."
          style={{ border: 'none', outline: 'none', fontSize: '14px', minWidth: '80px', flex: 1 }}
        />
      </div>
    );
  },
};
