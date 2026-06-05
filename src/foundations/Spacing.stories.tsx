import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacing, borderRadius } from './spacing';
import { shadows } from './shadows';

const meta: Meta = {
  title: 'Foundation/Spacing & Shadows',
  parameters: { layout: 'padded' },
};

export default meta;

export const SpacingScale: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {Object.entries(spacing)
        .filter(([, v]) => v !== '0px')
        .map(([name, value]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#9CA3AF', width: '40px' }}>{name}</span>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#D1D5DB', width: '60px' }}>{value}</span>
          <div style={{ height: '20px', backgroundColor: '#3B82F6', borderRadius: '4px', width: value }} />
        </div>
      ))}
    </div>
  ),
};

export const BorderRadiusScale: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {Object.entries(borderRadius).filter(([k]) => k !== 'none').map(([name, value]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#3B82F6',
            borderRadius: value,
          }} />
          <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#374151' }}>{name}</span>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#9CA3AF' }}>{value}</span>
        </div>
      ))}
    </div>
  ),
};

export const Shadows: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start', padding: '24px' }}>
      {Object.entries(shadows).filter(([k]) => !['none', 'inner', 'focus', 'focusDanger'].includes(k)).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: value,
          }} />
          <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#374151' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
