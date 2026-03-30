import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="card-modern">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate developer with a love for creating meaningful digital experiences
        </p>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Jan Horak, a full-stack developer with a passion for creating innovative web applications that solve real-world problems. My journey in software development has taken me through various technologies and frameworks, always with a focus on writing clean, efficient code.
            </p>

            <p>
              I specialize in React, Node.js, and modern web technologies, with experience in both frontend, backend and mobile development as well as deployment. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>

            <p>
              When I'm not coding, you can find me working on passion projects, exploring new technologies, or spending time with my family. I believe in continuous learning and always strive to improve my craft.
            </p>

            <div className="resume-download">
              <a
                href="/Jan-Horak-Resume-2026.pdf"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <span>📄</span>
              </a>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/meetJanColor.png"
              alt="Jan Horak"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
