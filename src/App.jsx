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

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
