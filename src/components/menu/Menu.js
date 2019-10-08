import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faRocket,
  faCameraRetro,
  faPaperPlane,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { version } from '../../../package.json';

class Menu extends React.Component {
  state = {
    showSidebar: false
  };

  MenuItems = () => (
    <div>
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
      <li>
        <FontAwesomeIcon icon={faCameraRetro} />
        Photography
      </li>
      <li>
        <FontAwesomeIcon icon={faPaperPlane} />
        Contact
      </li>
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
    console.log('click!');
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    return (
      <div>
        <header>
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
          className={this.state.showSidebar ? 'sidebar show' : 'sidebar hidden'}
        >
          <ul className="p-0" onClick={this.handleClick}>
            <this.MenuItems />
          </ul>
          <div className="sidebar-footer">v { version }</div>
        </div>
      </div>
    );
  }
}

export default Menu;
