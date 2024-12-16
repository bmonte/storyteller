'use client';

import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'success' | 'error';
  icon?: ReactNode;
  onClick: () => void;
};

export function Button({
  icon,
  children,
  color = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type="button"
      className={clsx(styles.button, styles[`button--${color}`])}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
