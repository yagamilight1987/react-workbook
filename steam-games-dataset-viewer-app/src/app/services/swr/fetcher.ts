import { InTheSpotlight } from '@/app/types/fetcher';
import useSWR from 'swr';
import axiosInstance from '../axios';
import { GAME_DETAILS_URL, IN_THE_SPOTLIGHT_URL, MOST_DOWNLOADED_GAMES_URL, RANDOM_GAME_URL } from '../constants';

export const fetcher = (url: string) =>
  axiosInstance
    .get(url)
    .then((response) => response.data)
    .then(({ data }) => data);

export const useInTheSpotlight = (): InTheSpotlight => useSWR(IN_THE_SPOTLIGHT_URL, fetcher);

export const useMostDownloadedGames = () => useSWR(MOST_DOWNLOADED_GAMES_URL, fetcher);

export const useGameDetails = (id: number) => useSWR(`${GAME_DETAILS_URL}/${id}`, fetcher)

export const useRandomGame = () => useSWR(RANDOM_GAME_URL, fetcher);
