'use client';

import Image from 'next/image';

import styles from './Avatar.module.css';

interface AvatarProps {
  alt: string;
  src?: string;
}

export function Avatar({ alt, src }: AvatarProps) {
  function getInitials(name: string) {
    const initials = name.split(' ');

    if (initials.length >= 2) {
      return `${initials.shift()?.charAt(0)}${initials
        .pop()
        ?.charAt(0)}`.toUpperCase();
    }

    return name.substring(0, 2).toUpperCase();
  }

  function handleAvatarType() {
    if (src) {
      return (
        <Image
          className={styles.avatar__img}
          src={src}
          alt={alt}
          width={36}
          height={36}
          unoptimized
        />
      );
    }

    return <p className={styles.avatar__text}>{getInitials(alt)}</p>;
  }

  return (
    <div className={styles.avatar} title={alt}>
      {handleAvatarType()}
    </div>
  );
}
