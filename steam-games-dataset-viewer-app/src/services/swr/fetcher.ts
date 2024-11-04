import { GamesSWRType, InTheSpotlightType } from '@/types/fetcher';
import useSWR from 'swr';
import axiosInstance from '../axios';
import * as URLS from '../constants';

export const fetcher = (url: string, params?: GamesSWRType) => axiosInstance.get(url, { params }).then((response) => response.data);

export const useInTheSpotlight = (): InTheSpotlightType => useSWR(URLS.IN_THE_SPOTLIGHT_URL, fetcher);

export const useMostDownloadedGames = () => useSWR(URLS.MOST_DOWNLOADED_GAMES_URL, fetcher);

export const useGameDetails = (id: number) => useSWR(`${URLS.GAME_DETAILS_URL}/${id}`, fetcher);

export const useRandomGame = () => useSWR(URLS.RANDOM_GAME_URL, fetcher);

export const useGames = (params?: GamesSWRType) => useSWR([URLS.GAMES_URL, params], ([url, params]) => fetcher(url, params));
