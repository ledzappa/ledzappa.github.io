import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-sm-10">
        <h2>Hello there!</h2>
        <div className="content-bg-dark">
          <p className="text-justify">
            I'm a frontend developer with an interest in design and UX. My
            current toolbox consists of JavaScript/TypeScript, Angular,
            React.js, HTML/CSS, jQuery, Bootstrap (among others). I'm always
            eager to learn more and to develop my skills. Occasionally I also
            make guest appearances at "the other side", perhaps writing some PHP
            and SQL. I strive to write easy-to-read, slick and maintainable
            code, to challenge myself and to surpass expectations.
          </p>
          <ul>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
