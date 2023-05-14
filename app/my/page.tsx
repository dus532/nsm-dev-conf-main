'use client';

import PageTitle from '@/components/PageTitle';
import globalStyles from '../globals.module.css';
import { useGetStudies } from '@/api/queries';
import StudyItem from '@/components/StudyItem';
import Link from 'next/link';
import { myStudyIdsState } from '@/store/my';
import { useRecoilValue } from 'recoil';

export default function Page() {
  const { data } = useGetStudies();
  const dataStudies = data?.data.payload;

  const studies = useRecoilValue(myStudyIdsState);
  const myStudies = dataStudies?.filter(
    (study) => study.id === studies?.find((id) => id === study.id)
  );

  return (
    <>
      <PageTitle>
        MY
        <br />
        <span className={globalStyles.Secondary}>
          CONF &#123;{studies?.length}&#125;
        </span>
      </PageTitle>
      {myStudies?.map((study) => (
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
