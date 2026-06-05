import React from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isError?: boolean;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      isError = false,
      fullWidth = false,
      resize = 'vertical',
      id,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const hasError = isError || !!errorMessage;

    return (
      <div className={[styles.wrapper, fullWidth ? styles.fullWidth : ''].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={hasError}
          className={[
            styles.textarea,
            hasError ? styles.error : '',
            disabled ? styles.disabled : '',
            className ?? '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ resize }}
          {...props}
        />
        {errorMessage && (
          <p className={styles.errorText} role="alert">{errorMessage}</p>
        )}
        {!errorMessage && helperText && (
          <p className={styles.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
