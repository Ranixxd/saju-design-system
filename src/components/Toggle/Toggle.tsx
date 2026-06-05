import React from 'react';
import styles from './Toggle.module.css';

export type ToggleSize = 'sm' | 'md' | 'lg';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: ToggleSize;
  label?: string;
  helperText?: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ size = 'md', label, helperText, id, disabled, className, ...props }, ref) => {
    const inputId = id ?? (label ? `toggle-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <div className={styles.wrapper}>
        <label
          htmlFor={inputId}
          className={[styles.label, disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
        >
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={inputId}
            disabled={disabled}
            className={[styles.input, className ?? ''].filter(Boolean).join(' ')}
            {...props}
          />
          <span className={[styles.track, styles[size]].join(' ')} aria-hidden="true">
            <span className={styles.thumb} />
          </span>
          {label && <span className={styles.labelText}>{label}</span>}
        </label>
        {helperText && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
