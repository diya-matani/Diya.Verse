import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="hero"><Hero /></section>
        <section id="about" style={{ display: 'none' }}></section> {/* Merged into Hero typically, but keeping structure */}
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;
