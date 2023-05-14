import { getStudiesByID } from '@/api/api';
import globalStyles from '../../globals.module.css';
import PageTitle from '@/components/PageTitle';

import dayjs from 'dayjs';

import type { Metadata } from 'next';
import DetailItem from '@/components/DetailItem';
import Button from '@/components/Button';
import Subscription from '@/components/Subscription';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await getStudiesByID({ id: params.id });
  const dataStudy = data.payload;

  return {
    title: `NSM DEV CONF : ${dataStudy.category} ${dataStudy.name}`,
    openGraph: {
      title: `${dataStudy.category} ${dataStudy.name}`,
      description: dataStudy.description,
      images: [
        {
          url: `https://raw.githubusercontent.com/dus532/storage_home/main/thumb.png`,
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = await getStudiesByID({ id: params.id });
  const dataStudy = data.payload;

  const startDate = dayjs(dataStudy.startDateTime);
  const endDate = dayjs(dataStudy.endDateTime);

  return (
    <>
      <PageTitle bottom={<Subscription id={params.id} />}>
        <span className={globalStyles.Secondary}>{dataStudy?.category}</span>
        <br />
        {dataStudy?.name}
      </PageTitle>
      <DetailItem title='소개' body={dataStudy?.description} />
      <DetailItem title='장소' body={dataStudy?.location} />
      <DetailItem
        title='시간'
        body={`${startDate.format('MM.DD hh:mm')} ~ ${endDate.format(
          startDate.format('MM.DD') === endDate.format('MM.DD')
            ? 'hh:mm'
            : 'MM.DD hh:mm'
        )}`}
      />
      <DetailItem title='강사' body={dataStudy?.speaker?.join(', ')} />
      <DetailItem title='기술 스택' body={dataStudy?.stack?.join(',')} />
    </>
  );
}
