'use client';

import styles from './PageTitle.module.css';

export default function PageTitle({
  children,
  bottom,
}: {
  children?: React.ReactNode;
  bottom?: React.ReactNode;
}) {
  return (
    <div className={styles.Page_Title}>
      <h1>{children}</h1>
      <div className={styles.Page_Bottom}>{bottom}</div>
    </div>
  );
}
