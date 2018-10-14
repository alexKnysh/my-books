import * as React from 'react';
import './App.css';
import { RouteConfig } from 'react-router-config';
import { RenderRoute } from '../../component/RenderRoute';
import { PublicRoute } from '../../routes';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        {(PublicRoute.routes as RouteConfig[]).map(routeItems => (
          <RenderRoute key={routeItems.path} {...routeItems} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
