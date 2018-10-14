import { RouteConfig } from 'react-router-config';
import * as RoutePath from '../constants';
import { App } from '../containers/App';
import ContainerPage from '../containers/ContainerPage/ContainerPage';
import { HomePage } from '../containers/Home';
import SignIn from '../containers/SignIn/SignIn';

export default {
  component: App,
  routes: [
    {
      component: ContainerPage,
      routes: [
        {
          path: RoutePath.HOME_PATH,
          component: HomePage
        },
        {
          path: RoutePath.SIGN_IN_PATH,
          component: SignIn
        }
      ] as RouteConfig
    }
  ] as RouteConfig[]
} as RouteConfig;
