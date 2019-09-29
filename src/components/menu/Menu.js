import React from 'react';
import './menu.css';

class Menu extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Photography</li>
          <li>Other</li>
        </ul>
      </header>
    );
  }
}

export default Menu;
