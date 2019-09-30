import React from 'react';
import './menu.css';

class Menu extends React.Component {
  state = {
    showSidebar: false
  };

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
            <li>About</li>
            <li>Projects</li>
            <li>Photography</li>
            <li>Other</li>
          </ul>
          <button
            className="d-block d-sm-none"
            onClick={this.handleClick}
          >Show</button>
        </header>

        <div
          className={this.state.showSidebar ? 'sidebar show' : 'sidebar hidden'}
        >
          <button
            className="d-block d-sm-none"
            onClick={this.handleClick}
          >Hide</button>
          <ul className="p-0">
            <li>About</li>
            <li>Projects</li>
            <li>Photography</li>
            <li>Other</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
