import type { Preview } from '@storybook/react-vite';
import '../src/foundations/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'gray', value: '#F9FAFB' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
};

export default preview;