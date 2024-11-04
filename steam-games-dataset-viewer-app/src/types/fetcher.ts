import { Game } from './game';
import { GameDetails } from './game-details';

export type SWRType = {
  isLoading: boolean;
  error: unknown;
};

export type InTheSpotlightType = { data: { data: Partial<Game>[] } } & SWRType;
export type MostDownloadedGamesType = { data: { data: Array<Partial<Game> & { median: number }> } } & SWRType;
export type RandomGameType = { data: { data: Partial<Game> & { screenshot: string } } } & SWRType;
export type GameDetailsType = { data: { data: Partial<Game> & Partial<GameDetails> } } & SWRType;
export type GamesParamsType = { page: number; pageSize: number; [key: string]: string | number };
export type GamesType = { data: { data: Array<Partial<Game> & { total_count: number }> } } & SWRType;
