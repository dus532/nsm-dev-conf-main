import { getStudies, getStudiesByID } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export function useGetStudies(query: Parameters<typeof getStudies>[0] = {}) {
  return useQuery(['studies', query], () => getStudies(query));
}

export function useGetStudiesByID(id: Parameters<typeof getStudiesByID>[0]) {
  return useQuery(['studiesByID', id], () => getStudiesByID(id));
}
