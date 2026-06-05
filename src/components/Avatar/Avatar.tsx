import React from 'react';
import styles from './Avatar.module.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function getColorFromName(name: string): string {
  const colors = [
    '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B',
    '#10B981', '#06B6D4', '#EF4444', '#F97316',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className,
}) => {
  const [imgError, setImgError] = React.useState(false);
  const showInitials = !src || imgError;
  const initials = name ? getInitials(name) : '?';
  const bgColor = name ? getColorFromName(name) : '#9CA3AF';

  return (
    <span
      className={[styles.avatar, styles[size], className ?? ''].filter(Boolean).join(' ')}
      style={showInitials ? { backgroundColor: bgColor } : undefined}
      aria-label={alt ?? name}
      role="img"
    >
      {!showInitials ? (
        <img
          src={src}
          alt={alt ?? name ?? ''}
          className={styles.img}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={styles.initials} aria-hidden="true">
          {initials}
        </span>
      )}
    </span>
  );
};
