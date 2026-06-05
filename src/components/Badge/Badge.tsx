import React from 'react';
import styles from './Badge.module.css';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  className,
}) => {
  return (
    <span
      className={[styles.badge, styles[variant], styles[size], dot ? styles.dot : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
    >
      {dot && <span className={styles.dotIndicator} aria-hidden="true" />}
      {children}
    </span>
  );
};
