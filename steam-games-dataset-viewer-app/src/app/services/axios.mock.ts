import { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { IN_THE_SPOTLIGHT_URL, MOST_DOWNLOADED_GAMES } from './constants';
import InTheSpotlightJson from './data/InTheSpotlight.json';
import MostDownloadedGamesJson from './data/MostDownloadedGames.json';

const setupAxiosMock = (instance: AxiosInstance) => {
  console.log('SETTING UP MOCK!!!');
  const mock = new AxiosMockAdapter(instance);

  mock.onGet(IN_THE_SPOTLIGHT_URL).reply(200, InTheSpotlightJson);

  mock.onGet(MOST_DOWNLOADED_GAMES).reply(200, MostDownloadedGamesJson);
};

export default setupAxiosMock;
