import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faRocket,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { version } from '../../../package.json';

class Menu extends React.Component {
  state = {
    showSidebar: false
  };

  MenuItems = () => (
    <div className="menu-component">
      <NavLink activeClassName="is-active" to="/about">
        <li>
          <FontAwesomeIcon icon={faInfoCircle} />
          About
        </li>
      </NavLink>
      <NavLink activeClassName="is-active" to="/projects">
        <li>
          <FontAwesomeIcon icon={faRocket} />
          Projects
        </li>
      </NavLink>
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
      <div className="row menu-component">
        <div className="col-12">
          <header className="text-center">
            <ul className="d-none d-sm-block p-0">
              <this.MenuItems />
            </ul>
            <FontAwesomeIcon
              className="d-block d-sm-none"
              icon={faBars}
              size="lg"
              onClick={this.handleClick}
            />
          </header>
          <div
            className={
              this.state.showSidebar
                ? 'menu-overlay animated fadeIn fast'
                : 'menu-overlay animated fadeOut fast'
            }
          ></div>
          <div
            className={
              this.state.showSidebar ? 'sidebar show' : 'sidebar hidden'
            }
          >
            <ul className="p-0" onClick={this.handleClick}>
              <this.MenuItems />
            </ul>
            <div className="sidebar-footer">v {version}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
