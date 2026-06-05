import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Toast, ToastProvider, useToast } from './Toast';
import { Button } from '../Button';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

const ToastDemo = () => {
  const { addToast } = useToast();
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => addToast({ variant: 'info', title: '알림', message: '새로운 업데이트가 있습니다.' })}
      >
        Info
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => addToast({ variant: 'success', title: '완료', message: '저장되었습니다.' })}
      >
        Success
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => addToast({ variant: 'warning', title: '경고', message: '저장 공간이 부족합니다.' })}
      >
        Warning
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => addToast({ variant: 'danger', title: '오류', message: '요청을 처리할 수 없습니다.' })}
      >
        Danger
      </Button>
    </div>
  );
};

export const Interactive: StoryObj = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const SingleToastInfo: StoryObj = {
  render: () => (
    <div style={{ position: 'relative', width: '400px' }}>
      <Toast
        id="1"
        variant="info"
        title="알림"
        message="새로운 댓글이 달렸습니다."
        duration={0}
        onDismiss={() => {}}
      />
    </div>
  ),
};

export const AllVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
      {(['info', 'success', 'warning', 'danger'] as const).map((variant) => (
        <Toast
          key={variant}
          id={variant}
          variant={variant}
          title={{ info: '알림', success: '성공', warning: '경고', danger: '오류' }[variant]}
          message={{ info: '새 메시지가 있습니다.', success: '변경사항이 저장되었습니다.', warning: '세션이 곧 만료됩니다.', danger: '서버 오류가 발생했습니다.' }[variant]}
          duration={0}
          onDismiss={() => {}}
        />
      ))}
    </div>
  ),
};
