import React from 'react'

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Python', icon: '🐍' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Material UI', icon: '🎯' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Django', icon: '🎸' },
  { name: 'React Native', icon: '📱' },
  { name: 'Redux', icon: '🔄' }
]

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Technologies and tools I use to bring ideas to life
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
