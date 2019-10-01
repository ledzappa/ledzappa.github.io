import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
  state = {
    showSidebar: false
  };

  MenuItems = () => (
    <div>
      <NavLink activeClassName="is-active" to="/about">
        <li>About</li>
      </NavLink>
      <NavLink activeClassName="is-active" to="/projects">
        <li>Projects</li>
      </NavLink>
      <li>Photography</li>
      <li>Other</li>
    </div>
  );

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    if (this.state.showSidebar && e.target.innerWidth >= 576) {
      this.setState({ showSidebar: false });
    }
  };

  handleClick = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    return (
      <div>
        <header>
          <ul className="d-none d-sm-block p-0">
            <this.MenuItems />
          </ul>
          <button className="d-block d-sm-none" onClick={this.handleClick}>
            Show
          </button>
        </header>

        <div
          className={this.state.showSidebar ? 'sidebar show' : 'sidebar hidden'}
        >
          <button className="d-block d-sm-none" onClick={this.handleClick}>
            Hide
          </button>
          <ul className="p-0">
            <this.MenuItems />
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
