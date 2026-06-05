import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  isError?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, isError = false, id, disabled, className, ...props }, ref) => {
    const inputId = id ?? (label ? `radio-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <div className={styles.wrapper}>
        <label
          htmlFor={inputId}
          className={[styles.label, disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
        >
          <input
            ref={ref}
            type="radio"
            id={inputId}
            disabled={disabled}
            aria-invalid={isError}
            className={[styles.input, isError ? styles.error : '', className ?? ''].filter(Boolean).join(' ')}
            {...props}
          />
          <span className={styles.dot} aria-hidden="true" />
          {label && <span className={styles.labelText}>{label}</span>}
        </label>
        {helperText && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export interface RadioGroupProps {
  name: string;
  label?: string;
  options: { label: string; value: string; disabled?: boolean }[];
  value?: string;
  onChange?: (value: string) => void;
  isError?: boolean;
  errorMessage?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  isError = false,
  errorMessage,
}) => {
  return (
    <fieldset className={styles.group}>
      {label && <legend className={styles.groupLabel}>{label}</legend>}
      <div className={styles.options}>
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name={name}
            label={opt.label}
            value={opt.value}
            checked={value === opt.value}
            disabled={opt.disabled}
            isError={isError}
            onChange={() => onChange?.(opt.value)}
          />
        ))}
      </div>
      {errorMessage && <p className={styles.errorText} role="alert">{errorMessage}</p>}
    </fieldset>
  );
};
