import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import { RenderRoute } from '../../component/RenderRoute';
import Header from '../Home/Header';

type Props = RouteConfig;

class ContainerPage extends React.Component<Props> {
  render() {
    const { routes } = this.props as { routes: RouteConfig[] };
    return (
      <div>
        <Header />
        {routes.map((route: any) => (
          <RenderRoute key={route.path} {...route} />
        ))}
      </div>
    );
  }
}

export default ContainerPage;
