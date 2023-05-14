import { Suspense } from 'react';
import Loading from '@/app/studies/[id]/loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
