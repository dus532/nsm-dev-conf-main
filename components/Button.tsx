'use client';

import React from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
}

Button.Secondary = function SecondaryButton({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.Button} ${styles.SecondaryButton}`} {...props}>
      {children}
    </button>
  );
};
