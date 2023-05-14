'use client';

import PageTitle from '@/components/PageTitle';
import globalStyles from '../globals.module.css';
import styles from './page.module.css';
import { useGetStudies } from '@/api/queries';
import StudyItem from '@/components/StudyItem';

export default function Page() {
  const { data } = useGetStudies();

  const dataStudies = data?.data.payload;

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
      {dataStudies?.map((study) => (
        <StudyItem
          key={study.id}
          category={study.category}
          name={study.name}
          description={study.description}
        />
      ))}
    </>
  );
}
