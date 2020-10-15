import React from 'react';
import About from '../feature/about/About';
import Projects from './../feature/projects/Projects';
import TechStack from './../feature/tech-stack/TechStack';
import './App.css';

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-12 p-0">
          <About />
          <Projects />
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default App;
