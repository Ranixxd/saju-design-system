import type { Meta, StoryObj } from '@storybook/react-vite';
import { fontSize, fontWeight, lineHeight } from './typography';

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: { layout: 'padded' },
};

export default meta;

export const FontSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {Object.entries(fontSize).map(([name, size]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
          <div style={{ width: '48px', flexShrink: 0 }}>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#9CA3AF', fontWeight: 600 }}>{name}</span>
          </div>
          <span style={{ fontSize: '12px', color: '#9CA3AF', fontFamily: 'monospace', width: '60px' }}>{size}</span>
          <span style={{ fontSize: size, color: '#111827', lineHeight: 1.2 }}>
            빠른 갈색 여우가 게으른 개를 뛰어넘는다
          </span>
        </div>
      ))}
    </div>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {Object.entries(fontWeight).map(([name, weight]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#9CA3AF', width: '80px', fontWeight: 600 }}>{name} ({weight})</span>
          <span style={{ fontSize: '20px', fontWeight: weight, color: '#111827' }}>
            디자인 시스템 — Design System
          </span>
        </div>
      ))}
    </div>
  ),
};

export const LineHeights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {Object.entries(lineHeight).map(([name, lh]) => (
        <div key={name} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#9CA3AF', width: '100px', paddingTop: '2px', fontWeight: 600 }}>{name} ({lh})</span>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: lh, maxWidth: '320px', color: '#374151', background: '#F9FAFB', padding: '8px 12px', borderRadius: '6px' }}>
            이 텍스트는 줄 간격 예시입니다. 여러 줄로 표시되어 줄 간격의 차이를 확인할 수 있습니다. 적절한 줄 간격은 가독성을 높여줍니다.
          </p>
        </div>
      ))}
    </div>
  ),
};
