import { GameDetails } from "./game-details";

export interface Game {
  game_id: number;
  name: string;
  price: number;
  short_description: string;
  header_image: string;
  website?: string;
  genres: string[];
  positive: number;
  negative: number;
  details?: GameDetails;
}
