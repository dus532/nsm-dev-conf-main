'use client';

import Button from '@/components/Button';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { myStudyIdsState } from '@/store/my';

export default function Header() {
  const studies = useRecoilValue(myStudyIdsState);

  return (
    <header className={styles.Header}>
      <Link href='/'>
        <Image priority src='/svg/logo.svg' height={72} width={72} alt='LOGO' />
      </Link>
      <div className={styles.HeaderRight}>
        <Link href='/my'>
          <Button.Secondary>
            내 강의 &#123;{studies?.length}&#125;
          </Button.Secondary>
        </Link>
        <Link href='/studies'>
          <Button>강의목록</Button>
        </Link>
      </div>
    </header>
  );
}
