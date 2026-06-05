import type { Meta, StoryObj } from '@storybook/react-vite';
import { palette, semanticColors } from './colors';

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: { layout: 'padded' },
};

export default meta;

const Swatch = ({ name, value }: { name: string; value: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', width: '80px' }}>
    <div style={{
      width: '60px',
      height: '60px',
      borderRadius: '12px',
      backgroundColor: value,
      border: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    }} />
    <span style={{ fontSize: '11px', color: '#374151', fontWeight: 500 }}>{name}</span>
    <span style={{ fontSize: '10px', color: '#9CA3AF', fontFamily: 'monospace' }}>{value}</span>
  </div>
);

const ColorScale = ({ name, scale }: { name: string; scale: Record<string | number, string> }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600, color: '#374151', textTransform: 'capitalize' }}>{name}</h3>
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {Object.entries(scale).map(([key, value]) => (
        <Swatch key={key} name={String(key)} value={value} />
      ))}
    </div>
  </div>
);

export const Palette: StoryObj = {
  render: () => (
    <div>
      <ColorScale name="Neutral" scale={palette.neutral} />
      <ColorScale name="Primary" scale={palette.primary} />
      <ColorScale name="Success" scale={palette.success} />
      <ColorScale name="Warning" scale={palette.warning} />
      <ColorScale name="Danger" scale={palette.danger} />
      <ColorScale name="Info" scale={palette.info} />
    </div>
  ),
};

export const SemanticTokens: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {Object.entries(semanticColors).map(([group, values]) => (
        <div key={group}>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600, color: '#374151', textTransform: 'capitalize' }}>{group}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
            {Object.entries(values).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: value as string, border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: '12px', fontWeight: 500, color: '#374151' }}>{key}</p>
                  <p style={{ margin: 0, fontSize: '11px', color: '#9CA3AF', fontFamily: 'monospace' }}>{value as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
