import React from 'react';
import styles from './Typography.module.css';

// Heading
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  level?: HeadingLevel;
}

export const Heading: React.FC<HeadingProps> = ({
  as,
  level = 'h2',
  className,
  children,
  ...props
}) => {
  const Tag = (as ?? level) as React.ElementType;
  return (
    <Tag
      className={[styles[level], className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
};

// Text
export type TextVariant = 'body' | 'body-sm' | 'caption' | 'overline';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'danger' | 'success';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: TextVariant;
  color?: TextColor;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  truncate?: boolean;
}

export const Text: React.FC<TextProps> = ({
  as: Tag = 'p',
  variant = 'body',
  color = 'primary',
  weight,
  truncate = false,
  className,
  children,
  ...props
}) => {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={[
        styles.text,
        styles[variant.replace('-', '_')],
        styles[`color_${color}`],
        weight ? styles[`weight_${weight}`] : '',
        truncate ? styles.truncate : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
};
