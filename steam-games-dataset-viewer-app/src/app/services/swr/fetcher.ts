import { InTheSpotlight } from '@/app/types/fetcher';
import useSWR from 'swr';
import axiosInstance from '../axios';

export const fetcher = (url: string) =>
  axiosInstance
    .get(url)
    .then((response) => JSON.parse(response.data))
    .then((json) => json.data);

export const useInTheSpotlight = (): InTheSpotlight => useSWR('/api/browse/in_the_spotlight', fetcher);
