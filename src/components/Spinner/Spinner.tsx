import React from 'react';
import styles from './Spinner.module.css';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'primary' | 'white' | 'neutral';

export interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  label = 'Loading...',
  className,
}) => {
  return (
    <span
      role="status"
      aria-label={label}
      className={[styles.spinner, styles[size], styles[variant], className ?? ''].filter(Boolean).join(' ')}
    >
      <span className="sr-only">{label}</span>
    </span>
  );
};
