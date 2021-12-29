import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Components
import Nav from './Components/Nav/Nav'
import AboutMe from './Components/AboutMe/AboutMe';



function App() {
  return (
    <>
    <Nav />
    <main>

    <div className="App">
hello, world
    </div>
      <Routes>
        <Route path="/"  />
        <Route path="/about" element={<AboutMe />} />

      </Routes>
    </main>
    </>
  );
}

export default App;
