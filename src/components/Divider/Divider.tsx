import React from 'react';
import styles from './Divider.module.css';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  orientation?: DividerOrientation;
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className,
}) => {
  if (orientation === 'vertical') {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={[styles.vertical, className ?? ''].filter(Boolean).join(' ')}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        className={[styles.withLabel, className ?? ''].filter(Boolean).join(' ')}
      >
        <span className={styles.line} />
        <span className={styles.labelText}>{label}</span>
        <span className={styles.line} />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      className={[styles.horizontal, className ?? ''].filter(Boolean).join(' ')}
    />
  );
};
