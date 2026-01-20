import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Download from './components/Download';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Download />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
