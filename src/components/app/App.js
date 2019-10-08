import React from 'react';
import About from '../about/About';
import Menu from '../menu/Menu';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from '../projects/Projects';

function App() {
  return (
    <Router>
      <Menu />
      <div className="row">
        <div className="col-12 pt-4 pt-sm-5">
          <div className="row d-flex justify-content-center">
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/" exact component={About} />
            {/* For github pages */}
            <Route path="/juntti.nu" exact component={About} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
