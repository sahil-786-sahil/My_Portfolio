import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Hero onNavigate={setActiveSection} />;
      case 'skills':
        return <Skills />;
      case 'achievements':
        return <Achievements />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;