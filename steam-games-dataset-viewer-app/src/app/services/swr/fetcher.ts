import { InTheSpotlight } from '@/app/types/fetcher';
import useSWR from 'swr';
import axiosInstance from '../axios';
import { IN_THE_SPOTLIGHT_URL, MOST_DOWNLOADED_GAMES } from '../constants';

export const fetcher = (url: string) =>
  axiosInstance
    .get(url)
    .then((response) => response.data)
    .then(({ success, data }) => data);

export const useInTheSpotlight = (): InTheSpotlight => useSWR(IN_THE_SPOTLIGHT_URL, fetcher);

export const uesMostDownloadedGames = () => useSWR(MOST_DOWNLOADED_GAMES, fetcher);
