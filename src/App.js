import React, { Suspense, lazy } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useInView } from 'react-intersection-observer';
import './styles/App.css';

// Components
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';

// Lazy load your components
const About = lazy(() => import('./Components/AboutMe/AboutMe'));
const Skills = lazy(() => import('./Components/Skills/Skills'));
const Projects = lazy(() => import('./Components/Work/Work'));
const Contact = lazy(() => import('./Components/Contact/Contact'));

const Section = ({ id, Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} ref={ref}>
      {inView && (
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      )}
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul>
            <li><Link to="#landing">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Section id="landing" Component={Landing} />
        <Section id="about" Component={About} />
        <Section id="skills" Component={Skills} />
        <Section id="projects" Component={Projects} />
        <Section id="contact" Component={Contact} />
      </main>
    </div>
  );
};

export default App;