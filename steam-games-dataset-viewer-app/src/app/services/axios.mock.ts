import { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { GAME_DETAILS_URL, IN_THE_SPOTLIGHT_URL, MOST_DOWNLOADED_GAMES_URL, RANDOM_GAME_URL } from './constants';
import InTheSpotlightJson from './data/InTheSpotlight.json';
import MostDownloadedGamesJson from './data/MostDownloadedGames.json';
import GameDetailsJson from './data/GameDetails.json';
import RandomGameJson from './data/RandomGame.json';

const setupAxiosMock = (instance: AxiosInstance) => {
  console.log('SETTING UP MOCK!!!');
  const mock = new AxiosMockAdapter(instance, { delayResponse: 2000 });

  mock.onGet(IN_THE_SPOTLIGHT_URL).reply(200, InTheSpotlightJson);

  mock.onGet(MOST_DOWNLOADED_GAMES_URL).reply(200, MostDownloadedGamesJson);

  mock.onGet(RANDOM_GAME_URL).reply(200, RandomGameJson);

  mock.onGet(new RegExp(`${GAME_DETAILS_URL}/*`)).reply(200, GameDetailsJson);
};

export default setupAxiosMock;
