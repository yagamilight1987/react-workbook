import { GameDetails } from "./game-details";

export interface Game {
  game_id: number;
  header_image: string;
  name: string;
  price: number;
  genres: string[];
  positive: number;
  negative: number;
  release_date: string;
  details?: GameDetails;
}
