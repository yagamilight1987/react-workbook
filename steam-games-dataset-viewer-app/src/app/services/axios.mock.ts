import { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { GAME_DETAILS_URL, GAMES_URL, IN_THE_SPOTLIGHT_URL, MOST_DOWNLOADED_GAMES_URL, RANDOM_GAME_URL } from './constants';
import InTheSpotlightJson from './data/InTheSpotlight.json';
import MostDownloadedGamesJson from './data/MostDownloadedGames.json';
import GameDetailsJson from './data/GameDetails.json';
import RandomGameJson from './data/RandomGame.json';
import PaginatedGames from './data/PaginatedGames.json';
import { Game } from '../types/game';

const setupAxiosMock = (instance: AxiosInstance) => {
  console.log('SETTING UP MOCK!!!');
  const mock = new AxiosMockAdapter(instance, { delayResponse: 2000 });

  mock.onGet(IN_THE_SPOTLIGHT_URL).reply(200, InTheSpotlightJson);

  mock.onGet(MOST_DOWNLOADED_GAMES_URL).reply(200, MostDownloadedGamesJson);

  mock.onGet(RANDOM_GAME_URL).reply(200, RandomGameJson);

  mock.onGet(GAMES_URL).reply((config) => {
    console.log(config.params);
    const { page, pageSize, orderBy, orderDir } = config.params;
    const offset = (page - 1) * pageSize;
    const paginatedData = PaginatedGames.data.slice(offset, offset + pageSize);
    return [
      200,
      {
        success: PaginatedGames.succes,
        total_records: PaginatedGames.total_count,
        data: sortByName(paginatedData),
      },
    ];
  });

  mock.onGet(new RegExp(`${GAME_DETAILS_URL}/*`)).reply(200, GameDetailsJson);
};

export default setupAxiosMock;

const sortByName = (array: Array<Game>) => {
  return array.sort((a: Game, b: Game) => {
    if (a.name < b.name) {
      return -1; // a comes before b
    }
    if (a.name > b.name) {
      return 1; // a comes after b
    }
    return 0; // a and b are equal
  });
};
