import React from 'react'
import { TbBrandReactNative } from 'react-icons/tb'
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoCss3,
  IoLogoReact
} from 'react-icons/io5'
import {
  SiTypescript,
  SiJquery,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAmazons3,
  SiUbuntu,
  SiExpress,
  SiSequelize,
  SiVite,
  SiVuedotjs,
  SiFirebase,
  SiDjango
} from 'react-icons/si'
import { SiMongoose } from 'react-icons/si'
import { FaJava, FaNodeJs } from 'react-icons/fa'
import { TiHtml5 } from 'react-icons/ti'
import { IconContext } from 'react-icons/lib'

const Skills = ({ onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <div
      id="skills-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="mobileHeaders">Skills</h1>
      <div id="gallery-container">
        <IconContext.Provider value={{ size: '70' }}>
          <div className="skill">
            <IoLogoJavascript size="61" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <SiTypescript size="61" />
            <span>TypeScript</span>
          </div>
          <div className="skill">
            <IoLogoPython size="61" />
            <span>Python</span>
          </div>
          <div className="skill">
            <FaJava size="61" />
            <span>Java</span>
          </div>
          <div className="skill">
            <TiHtml5 size="61" />
            <span>HTML5</span>
          </div>
          <div className="skill">
            <IoLogoCss3 size="61" />
            <span>CSS3</span>
          </div>
          <div className="skill">
            <SiJquery size="61" />
            <span>jQuery</span>
          </div>
          <div className="skill">
            <IoLogoReact size="61" />
            <span>React</span>
          </div>
          <div className="skill">
            <TbBrandReactNative size="61" />
            <span>React Native</span>
          </div>
          <div className="skill">
            <SiVuedotjs size="61" />
            <span>Vue.js</span>
          </div>
          <div className="skill">
            <FaNodeJs size="61" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <SiExpress size="61" />
            <span>Express</span>
          </div>
          <div className="skill">
            <SiVite size="61" />
            <span>Vite</span>
          </div>
          <div className="skill">
            <SiDjango size="61" />
            <span>Django</span>
          </div>
          <div className="skill">
            <SiMongodb size="61" />
            <span>MongoDB</span>
          </div>
          <div className="skill">
            <SiMongoose />
            <span>Mongoose</span>
          </div>
          <div className="skill">
            <SiSequelize size="61" />
            <span>Sequelize</span>
          </div>
          <div className="skill">
            <SiPostgresql size="61" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill">
            <SiMysql size="61" />
            <span>MySQL</span>
          </div>
          <div className="skill">
            <SiUbuntu size="61" />
            <span>Ubuntu</span>
          </div>
          <div className="skill">
            <SiAmazons3 size="61" />
            <span>Amazon S3</span>
          </div>
          <div className="skill">
            <SiFirebase size="61" />
            <span>Firebase</span>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Skills
