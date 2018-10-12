import * as React from 'react';
import { Route } from 'react-router-dom';

export class RenderRoute extends React.Component<any> {
  render() {
    const route = this.props;
    const render = (props: any) => {
      return <route.component {...props} routes={route.routes} />;
    };
    return <Route path={route.path} render={render} />;
  }
}
