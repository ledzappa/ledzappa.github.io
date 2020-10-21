import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'

class Menu extends React.Component {
  handleClick = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    const menuItems = [
      { id: 'about', title: 'About', active: this.props.active === 'about' },
      {
        id: 'projects',
        title: 'Projects',
        active: this.props.active === 'projects',
      },
      {
        id: 'techStack',
        title: 'TechStack',
        active: this.props.active === 'techStack',
      },
    ];
    return (
      <div className="menu">
        <ul>
          {menuItems.map((item, i) => (
            <li id={item.id} onClick={this.props.onMenuClick} key={i}>
              {item.title}{' '}
              {item.active && (
                <FontAwesomeIcon icon={faHandPointLeft} size="lg" />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
