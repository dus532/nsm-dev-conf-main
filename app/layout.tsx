import Header from '@/components/Header';
import './globals.css';
import styles from './layout.module.css';
import ReactQueryProvider from '@/app/ReactQueryProviders';
import RecoilRoot from '@/app/RecoilRoot';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <RecoilRoot>
          <ReactQueryProvider>
            <Header />
            <main className={styles.Container}>{children}</main>
          </ReactQueryProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
