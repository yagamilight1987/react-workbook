import { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { GAME_DETAILS_URL, IN_THE_SPOTLIGHT_URL, MOST_DOWNLOADED_GAMES_URL } from './constants';
import InTheSpotlightJson from './data/InTheSpotlight.json';
import MostDownloadedGamesJson from './data/MostDownloadedGames.json';
import GameDetailsJson from './data/GameDetails.json';

const setupAxiosMock = (instance: AxiosInstance) => {
  console.log('SETTING UP MOCK!!!');
  const mock = new AxiosMockAdapter(instance);

  mock.onGet(IN_THE_SPOTLIGHT_URL).reply(200, InTheSpotlightJson);

  mock.onGet(MOST_DOWNLOADED_GAMES_URL).reply(200, MostDownloadedGamesJson);

  const regex = `/${GAME_DETAILS_URL}\d+/`;
  mock.onGet(`${GAME_DETAILS_URL}570`).reply(200, GameDetailsJson);
};

export default setupAxiosMock;
