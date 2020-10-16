import React from 'react';
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

const pages = [
  { component: () => <About />, ref: refs.about },
  { component: () => <Projects />, ref: refs.projects },
  { component: () => <TechStack />, ref: refs.techStack },
];

const scrollTo = (id) => {
  window.scrollTo(0, refs[id].current.offsetTop);
};

const handleMenuClick = (e) => {
  scrollTo(e.target.id);
};

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Menu onMenuClick={(e) => handleMenuClick(e)} />
          {pages.map((page) => (
            <div ref={page.ref}>{page.component()}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
