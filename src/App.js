import React from 'react';

import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import WhyUs from './components/WhyUs';
// import Eligibility from './components/Eligibility';
import Learn from './components/Learn';
import Placement from './components/Placement';
import StartingPrep from './components/StartingPrep';

import './App.css'

const App = () => {
  return (
    <div className='landing-page'>
      <Header/>
      <BecomeACCA />
      <WhyUs />
      <Learn />
      <Placement />
      <StartingPrep />
    </div>
  );
}

export default App;
