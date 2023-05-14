import axios from 'axios';

export interface APIResponse<T> {
  code: number;
  meta?: { total?: number };
  payload: T;
}

export interface Study {
  id: number;
  category: 'FE' | 'BE' | 'APP';
  name: string;
  description: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
  speaker: string[];
  stack: string[];
}

export const api = axios.create({
  baseURL: 'https://nsm-dev-conf.vercel.app/',
});

export async function getStudies({
  category,
  search,
}: {
  category?: string;
  search?: string;
} = {}) {
  return api.get<
    APIResponse<Pick<Study, 'id' | 'category' | 'name' | 'description'>[]>
  >('api/studies', {
    params: { category, search },
  });
}

export async function getStudiesByID({ id }: { id: string | number }) {
  return api.get<APIResponse<Study>>(`api/studies/${id}`);
}
