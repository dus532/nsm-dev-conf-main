'use client';

import PageTitle from '@/components/PageTitle';
import globalStyles from '../globals.module.css';
import styles from './page.module.css';
import { useGetStudies } from '@/api/queries';
import StudyItem from '@/components/StudyItem';
import Link from 'next/link';
import { useState } from 'react';
import { debounce } from '@/utils/debounce';

export default function Page() {
  const [query, setQuery] = useState({
    search: '',
    category: '',
  });
  const { data } = useGetStudies(query);

  const dataStudies = data?.data.payload;

  return (
    <>
      <PageTitle
        bottom={
          <div className={styles.PageTitle_Bottom}>
            <select
              value={query.category}
              onChange={(e) => {
                if (e.target.value === '전체') {
                  setQuery((v) => ({ ...v, category: '' }));
                  return;
                }

                setQuery((v) => ({ ...v, category: e.target.value }));
              }}
            >
              <option>전체</option>
              <option>FE</option>
              <option>BE</option>
              <option>APP</option>
            </select>
            <input
              placeholder='검색'
              value={query.search}
              onChange={(e) => {
                setQuery((v) => ({ ...v, search: e.target.value }));
              }}
            />
          </div>
        }
      >
        CONF.
        <br />
        <span className={globalStyles.Secondary}>LIST</span>
      </PageTitle>
      {dataStudies?.map((study) => (
        <Link key={study.id} href={`/studies/${study.id}`}>
          <StudyItem
            id={study.id}
            category={study.category}
            name={study.name}
            description={study.description}
          />
        </Link>
      ))}
    </>
  );
}
