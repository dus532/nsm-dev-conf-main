import Header from '@/components/Header';
import './globals.css';
import styles from './layout.module.css';
import ReactQueryProvider from '@/app/ReactQueryProviders';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <ReactQueryProvider>
          <Header />
          <main className={styles.Container}>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
