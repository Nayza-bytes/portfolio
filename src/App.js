import React from 'react';
import Header from './sections/Header';
import Home from './sections/Home';
import Project from './sections/Projects';

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