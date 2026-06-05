import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={[
          styles.button,
          styles[variant],
          styles[size],
          fullWidth ? styles.fullWidth : '',
          loading ? styles.loading : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true" />
        )}
        {!loading && leftIcon && (
          <span className={styles.icon}>{leftIcon}</span>
        )}
        <span className={styles.label}>{children}</span>
        {!loading && rightIcon && (
          <span className={styles.icon}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
