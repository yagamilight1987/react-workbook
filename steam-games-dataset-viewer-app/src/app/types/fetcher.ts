import { Game } from './game';

export type InTheSpotlight = { data: Partial<Game>[]; isLoading: boolean; error: unknown };
