import React from 'react';
import styles from './Tag.module.css';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface TagProps {
  variant?: TagVariant;
  onRemove?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ variant = 'default', onRemove, children, className }) => {
  return (
    <span className={[styles.tag, styles[variant], className ?? ''].filter(Boolean).join(' ')}>
      <span className={styles.label}>{children}</span>
      {onRemove && (
        <button
          type="button"
          className={styles.removeBtn}
          onClick={onRemove}
          aria-label="Remove tag"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
};
