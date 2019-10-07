import React from 'react';
import About from '../about/About';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from '../projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <div className="pt-4">
          <div className="row d-flex justify-content-center">
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/" exact component={About} />
            {/* For github pages */}
            <Route path="/juntti.nu" exact component={About} />
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
