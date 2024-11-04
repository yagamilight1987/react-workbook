import { Game } from './game';

export type InTheSpotlightType = { data: { data: Partial<Game>[] }; isLoading: boolean; error: unknown };
export type GamesSWRType = { page: number; pageSize: number; [key: string]: string | number };
