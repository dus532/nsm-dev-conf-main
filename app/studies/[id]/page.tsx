import { getStudiesByID } from '@/api/api';
import globalStyles from '../../globals.module.css';
import PageTitle from '@/components/PageTitle';

import type { Metadata } from 'next';

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

  return (
    <>
      <PageTitle>
        <span className={globalStyles.Secondary}>{dataStudy?.category}</span>
        <br />
        {dataStudy?.name}
      </PageTitle>
    </>
  );
}
