import React from 'react';
import About from '../about/About';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from '../projects/Projects';

function App() {

  function onRouteC() {
    console.log("ROUTE CHANGED");
  }

  return (
    <div className="App">
      <Router onChange={onRouteC}>
        <Menu />
        <div className="pt-4">
          <div className="row d-flex justify-content-center">
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
