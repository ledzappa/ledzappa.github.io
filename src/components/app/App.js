import React from 'react';
import About from '../feature/about/About';
import Menu from '../menu/Menu';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from '../feature/projects/Projects';

function App() {
  return (
    <Router>
      <Menu />
      <div className="row">
        <div className="col-12 pt-4 pt-sm-5">
          <div className="row d-flex justify-content-center">
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/juntti.nu" exact component={About} />
            <Route path="/" exact component={About} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
