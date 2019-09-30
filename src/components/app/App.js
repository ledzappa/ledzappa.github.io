import React from 'react';
import About from '../about/About';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="pt-4">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
