import React from 'react';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  isError?: boolean;
  isSuccess?: boolean;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      errorMessage,
      leftAddon,
      rightAddon,
      isError = false,
      isSuccess = false,
      fullWidth = false,
      id,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
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
            styles.inputWrapper,
            styles[size],
            hasError ? styles.error : '',
            isSuccess ? styles.success : '',
            disabled ? styles.disabled : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {leftAddon && <span className={styles.addon}>{leftAddon}</span>}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            className={[styles.input, className ?? ''].filter(Boolean).join(' ')}
            {...props}
          />
          {rightAddon && <span className={styles.addon}>{rightAddon}</span>}
        </div>
        {errorMessage && (
          <p id={`${inputId}-error`} className={styles.errorText} role="alert">
            {errorMessage}
          </p>
        )}
        {!errorMessage && helperText && (
          <p id={`${inputId}-helper`} className={styles.helperText}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
