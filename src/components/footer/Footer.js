import React from 'react';
import packageJson from '../../../package.json';

class Footer extends React.Component {
  state = {};

  render() {
    return (
      <footer>v{packageJson.version}</footer>
    );
  }
}

export default Footer;
