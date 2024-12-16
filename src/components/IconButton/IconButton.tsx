'use client';

import { forwardRef } from 'react';

import styles from './IconButton.module.css';

type IconButtonProps = {
  children: React.ReactElement;
} & Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>;

function IconButtonComponent(
  { children, ...props }: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={styles['icon-button']}
      {...props}
    >
      {children}
    </button>
  );
}

export const IconButton = forwardRef(IconButtonComponent);
