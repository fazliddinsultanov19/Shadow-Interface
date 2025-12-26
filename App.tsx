
import React, { useState, useEffect } from 'react';
import BootSequence from './components/BootSequence';
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';
import SystemNoise from './components/SystemNoise';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const handleBootComplete = () => {
    setIsBooted(true);
    setTimeout(() => setAccessGranted(true), 1500);
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-50 font-['Inter'] overflow-hidden">
      <CustomCursor />
      <SystemNoise />
      
      {!accessGranted ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : (
        <Layout>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
        </Layout>
      )}
    </div>
  );
};

export default App;
