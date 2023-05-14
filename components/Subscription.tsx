'use client';

import Button from '@/components/Button';
import { myStudyIdsState } from '@/store/my';
import { useRecoilState } from 'recoil';

export default function Subscription({ id }: { id: string | number }) {
  const [studyIds, setStudyIds] = useRecoilState(myStudyIdsState);
  const isSelected = studyIds?.includes(Number(id));

  function onAdd(id: number) {
    setStudyIds((v) => [...v, id]);
  }

  function onDelete(id: number) {
    setStudyIds((v) => v.filter((v) => v !== id));
  }

  return (
    <>
      {isSelected ? (
        <Button.LightBlue
          onClick={() => {
            onDelete(Number(id));
          }}
        >
          강의 담기 취소
        </Button.LightBlue>
      ) : (
        <Button.Secondary
          onClick={() => {
            onAdd(Number(id));
          }}
        >
          강의 담기
        </Button.Secondary>
      )}
    </>
  );
}
