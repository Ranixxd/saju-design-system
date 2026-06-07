export const palette = {
  // Neutral
  white: '#FFFFFF',
  black: '#000000',
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },

  // Primary (Violet)
  primary: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },

  // Success (Green)
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },

  // Warning (Amber)
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  // Danger (Red)
  danger: {
    50: '#FFF1F2',
    100: '#FFE4E6',
    200: '#FECDD3',
    300: '#FDA4AF',
    400: '#FB7185',
    500: '#F43F5E',
    600: '#E11D48',
    700: '#BE123C',
    800: '#9F1239',
    900: '#881337',
  },

  // Info (Cyan)
  info: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',
  },
} as const;

export const semanticColors = {
  text: {
    primary: palette.neutral[900],
    secondary: palette.neutral[600],
    tertiary: palette.neutral[400],
    disabled: palette.neutral[300],
    inverse: palette.white,
    link: palette.primary[600],
    linkHover: palette.primary[700],
  },
  background: {
    primary: palette.white,
    secondary: palette.neutral[50],
    tertiary: palette.neutral[100],
    overlay: 'rgba(0, 0, 0, 0.5)',
    inverse: palette.neutral[900],
  },
  border: {
    default: palette.neutral[200],
    strong: palette.neutral[300],
    focus: palette.primary[500],
  },
  action: {
    primary: palette.primary[600],
    primaryHover: palette.primary[700],
    primaryActive: palette.primary[800],
    primaryDisabled: palette.primary[200],
  },
  status: {
    success: palette.success[500],
    successBg: palette.success[50],
    warning: palette.warning[500],
    warningBg: palette.warning[50],
    danger: palette.danger[500],
    dangerBg: palette.danger[50],
    info: palette.info[500],
    infoBg: palette.info[50],
  },
} as const;
