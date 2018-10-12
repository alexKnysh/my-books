import { RouteConfig } from 'react-router-config';
import { HOME_PATH } from '../constants';
import { App } from '../containers/App';
import { HomePage } from '../containers/Home';

export default {
  exact: true,
  component: App,
  routes: [
    {
      path: HOME_PATH,
      component: HomePage
    }
  ] as RouteConfig[]
} as RouteConfig;
