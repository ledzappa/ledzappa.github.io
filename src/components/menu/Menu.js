import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { version } from '../../../package.json';

class Menu extends React.Component {
  handleClick = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    const menuItems = [
      { id: 'about', title: 'About' },
      { id: 'projects', title: 'Projects' },
      { id: 'techStack', title: 'TechStack' },
    ];
    return (
      <div className="menu">
        <ul>
          {menuItems.map((item) => (
            <li id={item.id} onClick={this.props.onMenuClick}>
              {item.title}{' '}
              {/* <FontAwesomeIcon icon={faHandPointLeft} size="lg" /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
