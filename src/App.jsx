import React from 'react';

import './App.scss';

import {
  Navbar,
  Hero,
  About,
  Events,
  Gallery,
  Sponsors,
  Footer,
  
} from './sections';
import Team from './sections/Team/Team';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team/>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
