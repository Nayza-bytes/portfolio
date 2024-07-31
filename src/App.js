import React from 'react';
import Header from './sections/Header';
import Home from './sections/Home';
import Project from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Home />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;