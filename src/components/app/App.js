import React from 'react';
import About from '../about/About';
import Menu from '../menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div class="pt-4">
        <About />
      </div>
    </div>
  );
}

export default App;
