import Header from '@/components/Header';
import './globals.css';
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        <main className={styles.Container}>{children}</main>
      </body>
    </html>
  );
}
