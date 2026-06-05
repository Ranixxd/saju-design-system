import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Text } from './Typography';

const meta: Meta = {
  title: 'Components/Typography',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const Headings: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level="h1">H1 — 페이지 제목 (48px)</Heading>
      <Heading level="h2">H2 — 섹션 제목 (36px)</Heading>
      <Heading level="h3">H3 — 서브 섹션 (30px)</Heading>
      <Heading level="h4">H4 — 카드 제목 (24px)</Heading>
      <Heading level="h5">H5 — 소제목 (20px)</Heading>
      <Heading level="h6">H6 — 라벨 (18px)</Heading>
    </div>
  ),
};

export const TextVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
      <Text variant="body">Body — 기본 본문 텍스트입니다. 일반적인 콘텐츠에 사용합니다. (16px)</Text>
      <Text variant="body-sm">Body SM — 보조 본문 텍스트입니다. 설명이나 부가 정보에 사용합니다. (14px)</Text>
      <Text variant="caption" color="secondary">Caption — 캡션 텍스트. 이미지 설명이나 날짜에 사용합니다. (12px)</Text>
      <Text variant="overline" color="tertiary">Overline — 카테고리 라벨 (12px, uppercase)</Text>
    </div>
  ),
};

export const TextColors: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text color="primary">Primary — 기본 텍스트 색상</Text>
      <Text color="secondary">Secondary — 보조 텍스트 색상</Text>
      <Text color="tertiary">Tertiary — 비활성/힌트 텍스트</Text>
      <Text color="success">Success — 성공 메시지</Text>
      <Text color="danger">Danger — 에러 메시지</Text>
      <div style={{ background: '#111827', padding: '8px 12px', borderRadius: '8px' }}>
        <Text color="inverse">Inverse — 다크 배경 위 텍스트</Text>
      </div>
    </div>
  ),
};

export const TextWeights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text weight="regular">Regular (400) — 기본 굵기</Text>
      <Text weight="medium">Medium (500) — 중간 굵기</Text>
      <Text weight="semibold">Semibold (600) — 세미볼드</Text>
      <Text weight="bold">Bold (700) — 볼드</Text>
    </div>
  ),
};

export const Truncate: StoryObj = {
  render: () => (
    <div style={{ width: '240px' }}>
      <Text truncate>이 텍스트는 너무 길어서 말줄임표로 잘립니다. 더 긴 내용이 있습니다.</Text>
    </div>
  ),
};
