import { myStudyIdsState } from '@/store/my';
import { useRecoilState } from 'recoil';
import styles from './StudyItem.module.css';
import Image from 'next/image';

export default function StudyItem({
  id,
  category,
  name,
  description,
}: {
  id: number;
  category: string;
  name: string;
  description: string;
}) {
  const [studies, setStudies] = useRecoilState(myStudyIdsState);
  const isSelected = studies?.includes(id);

  return (
    <div className={styles.Item}>
      <h2 className={styles.ItemTitle}>
        <span className={styles.Secondary}>{category}</span> {name}
      </h2>
      <div className={styles.ItemDescription}>{description}</div>
      <div className={styles.ItemBlank} />
      <div className={styles.ItemButton}>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (isSelected) {
              if (!!window.confirm('정말로 삭제하시겠습니까?')) {
                setStudies((v) => v?.filter((study) => study !== id));
              }
            } else {
              setStudies((v) => [...v, id]);
            }
          }}
        >
          <Image
            priority
            src={isSelected ? '/svg/minus.svg' : '/svg/plus.svg'}
            height={32}
            width={32}
            alt='LOGO'
          />
        </button>
      </div>
    </div>
  );
}
