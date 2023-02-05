import React from 'react';

import './App.scss';

import {
  Navbar,
  Hero,
  About,
  Management,
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
      {/* <Management/> */}
      <Events />
      <Gallery />
      <Sponsors />
      <Footer />
    </div>
  );
};
//exporting app
//exporting app
export default App;
