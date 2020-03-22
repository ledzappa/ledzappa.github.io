import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContentBox from '../../shared/content-box/ContentBox';

class About extends React.Component {
  render() {
    return (
      <ContentBox>
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
          <hr />
          <ul className="list-unstyled">
            <li>
              <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
              <a
                href="https://www.linkedin.com/in/mikael-juntti-a7666534/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FontAwesomeIcon className="mr-2" icon={faGithub} />
              <a href="https://www.github.com/ledzappa" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </ContentBox>
    );
  }
}

export default About;
