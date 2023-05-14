import PageTitle from '@/components/PageTitle';
import globalStyles from '../globals.module.css';
import styles from './page.module.css';

export default function Page() {
  return (
    <>
      <PageTitle
        bottom={
          <div className={styles.PageTitle_Bottom}>
            <select>
              <option>전체</option>
              <option>FE</option>
              <option>BE</option>
              <option>APP</option>
            </select>
            <input placeholder='검색' />
          </div>
        }
      >
        CONF.
        <br />
        <span className={globalStyles.Secondary}>LIST</span>
      </PageTitle>
    </>
  );
}
