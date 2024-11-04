import * as TYPES from '@/types/fetcher';
import useSWR from 'swr';
import axiosInstance from '../axios';
import * as URLS from '../constants';

export const fetcher = (url: string, params?: TYPES.GamesParamsType) => axiosInstance.get(url, { params }).then((response) => response.data);

export const useInTheSpotlight = (): TYPES.InTheSpotlightType => useSWR(URLS.IN_THE_SPOTLIGHT_URL, fetcher);

export const useMostDownloadedGames = (): TYPES.MostDownloadedGamesType => useSWR(URLS.MOST_DOWNLOADED_GAMES_URL, fetcher);

export const useGameDetails = (id: number): TYPES.GameDetailsType => useSWR(`${URLS.GAME_DETAILS_URL}/${id}`, fetcher);

export const useRandomGame = (): TYPES.RandomGameType => useSWR(URLS.RANDOM_GAME_URL, fetcher);

export const useGames = (params?: TYPES.GamesParamsType) => useSWR([URLS.GAMES_URL, params], ([url, params]) => fetcher(url, params));
