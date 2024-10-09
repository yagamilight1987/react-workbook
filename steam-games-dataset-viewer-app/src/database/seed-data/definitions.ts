export type SteamGames = { [key: string]: Game };

export type Game = {
  game_id: string;
  name: string;
  price: number;
  short_description: string;
  header_image: string;
  website: string;
  genres: string[];
  positive: number;
  negative: number;
  details: GameDetails;
};

export type GameDetails = {
  release_date: string;
  required_age: number;
  dlc_count: number;
  detailed_description: string;
  about_the_game: string;
  reviews: string;
  support_url: string;
  support_email: string;
  windows: boolean;
  mac: boolean;
  linux: boolean;
  metacritic_score: number;
  metacritic_url: string;
  achievements: number;
  recommendations: number;
  notes: string;
  supported_languages: string[];
  full_audio_languages: any[];
  packages: Package[];
  developers: string[];
  publishers: string[];
  categories: string[];
  screenshots: string[];
  movies: string[];
  user_score: number;
  score_rank: string;
  estimated_owners: string;
  average_playtime_forever: number;
  average_playtime_2weeks: number;
  median_playtime_forever: number;
  median_playtime_2weeks: number;
  peak_ccu: number;
  tags: { [key: string]: number };
};

export type Package = {
  title: string;
  description: string;
  subs: Sub[];
};

export type Sub = {
  text: string;
  description: string;
  price: number;
};
