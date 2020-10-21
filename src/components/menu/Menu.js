import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Menu.css';

const Menu = (props) => {
  const menuItems = [
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'techStack', title: 'TechStack' },
  ];

  return (
    <div className="menu">
      <ul>
        {menuItems.map((item, i) => (
          <li id={item.id} onClick={props.onMenuClick} key={i}>
            {item.title}{' '}
            {props.active === item.id && (
              <FontAwesomeIcon icon={faHandPointLeft} size="lg" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
