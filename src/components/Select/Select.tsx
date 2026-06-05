import React from 'react';
import styles from './Select.module.css';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: SelectSize;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isError?: boolean;
  fullWidth?: boolean;
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      errorMessage,
      isError = false,
      fullWidth = false,
      options = [],
      placeholder,
      id,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const hasError = isError || !!errorMessage;

    return (
      <div className={[styles.wrapper, fullWidth ? styles.fullWidth : ''].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div
          className={[
            styles.selectWrapper,
            styles[size],
            hasError ? styles.error : '',
            disabled ? styles.disabled : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <select
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError}
            className={[styles.select, className ?? ''].filter(Boolean).join(' ')}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {children ??
              options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))}
          </select>
          <span className={styles.chevron} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        {errorMessage && <p className={styles.errorText} role="alert">{errorMessage}</p>}
        {!errorMessage && helperText && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
