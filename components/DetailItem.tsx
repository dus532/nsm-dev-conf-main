import styles from './DetailItem.module.css';

export default function DetailItem({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>{title}</div>
      <div>{body}</div>
    </div>
  );
}
