import styles from './StudyItem.module.css';

export default function StudyItem({
  category,
  name,
  description,
}: {
  category: string;
  name: string;
  description: string;
}) {
  return (
    <div className={styles.Item}>
      <h2 className={styles.ItemTitle}>
        <span className={styles.Secondary}>{category}</span> {name}
      </h2>
      <div className={styles.ItemDescription}>{description}</div>
      <div className={styles.ItemBlank} />
      <div className={styles.ItemButton} />
    </div>
  );
}
