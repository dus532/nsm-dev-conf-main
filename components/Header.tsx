'use client';

import Button from '@/components/Button';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Link href='/'>
        <Image priority src='/svg/logo.svg' height={72} width={72} alt='LOGO' />
      </Link>
      <div className={styles.HeaderRight}>
        <Button.Secondary onClick={() => {}}>
          내 강의 &#123;1&#125;
        </Button.Secondary>
        <Link href='/studies'>
          <Button>강의목록</Button>
        </Link>
      </div>
    </header>
  );
}
