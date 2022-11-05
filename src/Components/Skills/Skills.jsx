import React from 'react';
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoCss3,
  IoLogoReact,
} from 'react-icons/io5';
import {
  SiTypescript,
  SiJquery,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAmazons3,
  SiUbuntu,
} from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { SiExpress } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';

const Skills = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      id='skills-container'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <h1 className='mobileHeaders'>Skills</h1>
      <div id='gallery-container'>
        <IconContext.Provider value={{ size: '5em' }}>
          <IoLogoJavascript />
          <SiTypescript size='75' />
          <IoLogoPython />
          <FaJava />
          <TiHtml5 />
          <IoLogoCss3 />
          <IoLogoReact />
          <FaNodeJs />
          <SiExpress />
          <SiJquery />
          <SiMongodb />
          <SiPostgresql />
          <SiMysql />
          <SiAmazons3 />
          <SiUbuntu />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Skills;
