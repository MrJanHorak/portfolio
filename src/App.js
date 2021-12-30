import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Components
import Nav from './Components/Nav/Nav'
import AboutMe from './Components/AboutMe/AboutMe';
import Work from './Components/Work/Work';
import Skills from './Components/Skills/Skills';
import Passion from './Components/Passion/Passion';
import Contact from './Components/Contact/Contacxt';
import Landing from './Components/Landing/Landing';


function App() {
  return (
    <>
    <Nav />
    <main>

    <div className="App">
hello, world
    </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/passion" element={<Passion/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </main>
    </>
  );
}

export default App;
