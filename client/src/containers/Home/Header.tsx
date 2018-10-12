import * as React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="p-grid">Локация</div>
        <div className="p-grid">
          <div className="p-col">
            <div className="box">1</div>
          </div>
          <div className="p-col-6">2</div>
          <div className="p-col-6"> 3</div>
        </div>

        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;
