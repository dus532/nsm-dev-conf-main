import styles from './page.module.css';

function BGTitle({ left }: { left?: string }) {
  return (
    <div className={styles.BG_Title} style={{ left }}>
      NSM
      <br />
      DEV
      <br />
      CONF.
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className={styles.BG_Container}>
        <BGTitle left='0px' />
        <BGTitle left='60px' />
        <BGTitle left='120px' />
      </div>
      <h1 className={styles.Title}>
        MEET
        <br />
        <span className={styles.Title_Secondary}>NEW</span>
        <br />
        DEVELOP.
      </h1>
      <div className={styles.SubTitle}>
        NSM
        <br />
        23.05.14 16:00
        <br />
        <br />
        <span className={styles.SubTitle_Sub}>상금 100,000원</span>
      </div>
    </div>
  );
}
