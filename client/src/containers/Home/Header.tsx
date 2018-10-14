import * as React from 'react';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import * as RoutePath from '../../constants';

import { NavLink } from 'react-router-dom';
import { NavMenu } from './NavMenu';

interface State {
  showMenu: boolean;
}

class Header extends React.Component<{}, State> {
  state = {
    showMenu: false
  };

  onShowMenu() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  onChangeShow(value: boolean): void {
    this.setState({ showMenu: value });
  }

  render() {
    const { showMenu } = this.state;
    const onShowMenu = this.onShowMenu.bind(this);
    const onChangeShow = this.onChangeShow.bind(this);
    return (
      <React.Fragment>
        <header style={{ height: '75px' }}>
          <Toolbar>
            <div className="p-toolbar-group-left">
              <NavLink to={RoutePath.HOME_PATH}>
                <Button label="My book" className="p-button-secondary" />
              </NavLink>
              <Button
                className="p-button-secondary"
                icon="pi pi-bars"
                style={{ marginRight: '.25em' }}
                onClick={onShowMenu}
              />
            </div>
            <div className="p-toolbar-group-right">
              <div className="p-grid">
                <div className="p-col">
                  <NavLink to={RoutePath.SIGN_IN_PATH}>
                    <Button label={'SignIn'} className="p-m-" />
                  </NavLink>
                </div>
                <div className="p-col">
                  <Button label={'SignOut'}>
                    <NavLink to={'/test'} />
                  </Button>
                </div>
              </div>
            </div>
          </Toolbar>
        </header>
        <NavMenu visible={showMenu} onShow={onChangeShow} />
      </React.Fragment>
    );
  }
}

export default Header;
