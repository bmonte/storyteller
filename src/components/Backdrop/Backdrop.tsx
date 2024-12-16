'use client';

import styles from './Backdrop.module.css';

interface BackdropProps {
  open: boolean;
  children: React.ReactNode;
}

export function Backdrop({ open, children }: BackdropProps) {
  return (
    <>
      {children}
      {open && <div className={styles.backdrop} />}
    </>
  );
}
