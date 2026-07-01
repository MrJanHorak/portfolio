import React from 'react'
import { FaAws } from 'react-icons/fa'
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Python', Icon: SiPython },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'AWS', Icon: FaAws },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Git', Icon: SiGit },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'CSS3', Icon: SiCss },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'Material UI', Icon: SiMui },
  { name: 'Express.js', Icon: SiExpress },
  { name: 'Django', Icon: SiDjango },
  { name: 'React Native', Icon: SiReact },
  { name: 'Redux', Icon: SiRedux }
]

const capabilityTags = [
  'Frontend',
  'Backend',
  'Data',
  'Cloud & DevOps',
  'Mobile'
]

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Technologies and tools I use to bring ideas to life
      </p>

      <div className="skills-capabilities">
        {capabilityTags.map((tag) => (
          <span key={tag} className="capability-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-icon" aria-hidden="true">
              <skill.Icon />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
