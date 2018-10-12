import { RouteConfig } from 'react-router-config';
import { App } from '../containers/App';
import { HomePage } from '../containers/Home';

export default {
  exact: true,
  component: App,
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ] as RouteConfig[]
} as RouteConfig;
