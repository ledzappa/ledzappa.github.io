import React, { useEffect, useState } from 'react';
import About from '../feature/about/About';
import Projects from './../feature/projects/Projects';
import TechStack from './../feature/tech-stack/TechStack';
import Menu from './../menu/Menu';
import './App.css';

const refs = {
  about: React.createRef(),
  projects: React.createRef(),
  techStack: React.createRef(),
};

const scrollTo = (id) => {
  window.scrollTo(0, refs[id].current.offsetTop);
};

const handleMenuClick = (e) => {
  scrollTo(e.target.id);
};

const App = () => {
  const [activePage, setActivePage] = useState('about');

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e), true);
  }, []);

  const handleScroll = (e) => {
    if (refs.techStack.current.getBoundingClientRect().top < 20) {
      setActivePage('techStack');
    } else if (refs.projects.current.getBoundingClientRect().top < 20) {
      setActivePage('projects');
    } else {
      setActivePage('about');
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Menu onMenuClick={(e) => handleMenuClick(e)} active={activePage} />
          <div ref={refs.about}>
            <About />
          </div>
          <div ref={refs.projects}>
            <Projects />
          </div>
          <div ref={refs.techStack}>
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
