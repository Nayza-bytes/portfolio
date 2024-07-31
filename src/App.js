import React from 'react';
import Header from './Header';
import Home from './Home';
import Project from './Projects';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Home />
      <Project/>
    </div>
  );
}

export default App;