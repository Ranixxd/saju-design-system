import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isError?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, helperText, errorMessage, isError = false, indeterminate = false, id, disabled, className, ...props },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = (node: HTMLInputElement | null) => {
      (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    };

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const inputId = id ?? (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const hasError = isError || !!errorMessage;

    return (
      <div className={styles.wrapper}>
        <label
          htmlFor={inputId}
          className={[styles.label, disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
        >
          <input
            ref={combinedRef}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError}
            className={[styles.input, hasError ? styles.error : '', className ?? ''].filter(Boolean).join(' ')}
            {...props}
          />
          <span className={styles.checkmark} aria-hidden="true" />
          {label && <span className={styles.labelText}>{label}</span>}
        </label>
        {errorMessage && <p className={styles.errorText} role="alert">{errorMessage}</p>}
        {!errorMessage && helperText && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
