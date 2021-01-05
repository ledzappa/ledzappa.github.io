import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import me from '../../../assets/img/me.jpg';
import './About.css';

const About = () => (
  <div className="page page-about">
    <div className="container">
      <div className="row">
        <div className="col-sm-4 text-center">
          <img
            src={me}
            className="rounded-circle img-fluid mb-4 mt-4 mt-sm-0"
            alt="Me"
          />
        </div>
        <div className="col-sm-8">
          <h2>Hi!</h2>
          <p>
            My name is Mikael Juntti and I am a frontend developer with an
            interest in design and UX. My current toolbox consists of
            JavaScript/TypeScript, Angular, React.js, HTML/CSS, jQuery,
            Bootstrap (among others). I'm always eager to learn more and to
            develop my skills. Occasionally I also make guest appearances at
            "the other side", perhaps writing some PHP and SQL. I strive to
            write easy-to-read, slick and maintainable code, to challenge myself
            and to surpass expectations.
          </p>
          <hr />
          <div className="mb-4">
            <ul className="list-unstyled d-inline-block mb-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/mikael-juntti-a7666534/"
                  target="_blank"
                >
                  <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/ledzappa" target="_blank">
                  <FontAwesomeIcon className="mr-2" icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="CV2020.pdf" target="_blank">
                  <button className="btn btn-outline-custom mb-2">
                    <FontAwesomeIcon className="mr-2" icon={faFileDownload} />
                    Download CV
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
