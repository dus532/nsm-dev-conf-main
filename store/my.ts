import { asyncUserEffect } from '@/store/utils';
import { atom } from 'recoil';

export const myStudyIdsState = atom<number[]>({
  key: 'myStudyIds',
  default: [],
  effects: [asyncUserEffect('myStudyIds')],
});
