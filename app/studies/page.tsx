'use client';

import PageTitle from '@/components/PageTitle';
import globalStyles from '../globals.module.css';
import styles from './page.module.css';
import { useGetStudies } from '@/api/queries';
import StudyItem from '@/components/StudyItem';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/utils/debounce';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState({
    search: searchParams.get('search') ?? '',
    category: searchParams.get('category') ?? '',
  });

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const URL = new URLSearchParams();

    if (debouncedQuery.search) {
      URL.append('search', debouncedQuery.search);
    }
    if (debouncedQuery.category) {
      URL.append('category', debouncedQuery.category);
    }

    router.replace(`${pathname}?${URL.toString()}`, {
      forceOptimisticNavigation: true,
    });
  }, [pathname, debouncedQuery, router]);

  const { data, isLoading } = useGetStudies(debouncedQuery);
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
      {isLoading ? (
        <div className={styles.Loading}>로딩중..</div>
      ) : (
        dataStudies?.map((study) => (
          <Link key={study.id} href={`/studies/${study.id}`}>
            <StudyItem
              id={study.id}
              category={study.category}
              name={study.name}
              description={study.description}
            />
          </Link>
        ))
      )}
    </>
  );
}
