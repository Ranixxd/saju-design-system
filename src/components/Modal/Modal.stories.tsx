import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    closeOnOverlayClick: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = ({ size = 'md', title = '모달 제목' }: { size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; title?: string }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={title}
        size={size}
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>확인</Button>
          </>
        }
      >
        <p style={{ margin: 0, color: '#374151', lineHeight: 1.6 }}>
          모달 내용이 여기에 표시됩니다. 사용자에게 중요한 정보를 제공하거나 액션을 요청할 때 사용합니다.
        </p>
      </Modal>
    </div>
  );
};

export const Default: Story = { render: () => <ModalDemo /> };

export const Small: Story = { render: () => <ModalDemo size="sm" title="알림" /> };

export const Large: Story = { render: () => <ModalDemo size="lg" title="상세 정보" /> };

export const DeleteConfirm: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <Button variant="danger" onClick={() => setOpen(true)}>삭제</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="정말 삭제하시겠습니까?"
          size="sm"
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>삭제</Button>
            </>
          }
        >
          <p style={{ margin: 0, color: '#374151' }}>
            이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
          </p>
        </Modal>
      </div>
    );
  },
};
