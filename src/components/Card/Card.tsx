import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  padding = 'md',
  shadow = 'sm',
  bordered = true,
  hoverable = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={[
        styles.card,
        styles[`padding_${padding}`],
        styles[`shadow_${shadow}`],
        bordered ? styles.bordered : '',
        hoverable ? styles.hoverable : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={[styles.header, className ?? ''].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={[styles.body, className ?? ''].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={[styles.footer, className ?? ''].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
);
