import React, { Suspense, lazy } from 'react';
import './styles/App.css';

// Components
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';

// Lazy load your components
const About = lazy(() => import('./Components/AboutMe/AboutMe'));
const Skills = lazy(() => import('./Components/Skills/Skills'));
const Projects = lazy(() => import('./Components/Work/Work'));
const Contact = lazy(() => import('./Components/Contact/Contact'));

const Section = ({ id, Component }) => (
  <section id={id}>
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  </section>
);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Section id="landing" Component={Landing} />
        <Section id="about" Component={About} />
        <Section id="skills" Component={Skills} />
        <Section id="projects" Component={Projects} />
        <Section id="contact" Component={Contact} />
      </main>
      <footer>
        {/* Add footer content here if needed */}
      </footer>
    </div>
  );
};

export default App;
