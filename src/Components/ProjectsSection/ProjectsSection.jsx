import React, { useState } from 'react'
import { work, links, repositories, projectPics } from '../../assets/data'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  // All projects
  const allProjects = work.map((project, index) => {
    const title = project.split('\n')[0]
    const description = project.split('\n\n')[1]
    const techStack = project.split('Tech Stack: ')[1]?.split('\n')[0] || ''
    const achievements = project.split('Key Achievements: ')[1] || ''

    return {
      id: index,
      title,
      description,
      techStack,
      achievements,
      link: links[index],
      repo: repositories[index],
      images: projectPics[index]?.images || []
    }
  })

  // Show 6 or all
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6)

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A selection of projects I've worked on recently
      </p>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card">
            {project.images[0] && (
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-image"
              />
            )}

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.description?.substring(0, 150)}...
              </p>

              {project.techStack && (
                <div className="project-tech">
                  {project.techStack
                    .split(',')
                    .slice(0, 3)
                    .map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech
                          .trim()
                          .replace('Built with ', '')
                          .replace('.', '')}
                      </span>
                    ))}
                </div>
              )}

              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>🔗</span> Live Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>📦</span> GitHub
                  </a>
                )}
                <button
                  className="project-link"
                  onClick={() => openProjectModal(project)}
                >
                  <span>ℹ️</span> Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && allProjects.length > 6 && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="cta-button" onClick={() => setShowAll(true)}>
            Show More
          </button>
        </div>
      )}
      {showAll && allProjects.length > 6 && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="cta-button" onClick={() => setShowAll(false)}>
            Show Less
          </button>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              ×
            </button>

            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

            {selectedProject.techStack && (
              <div>
                <h4>Technology Stack:</h4>
                <p>{selectedProject.techStack}</p>
              </div>
            )}

            {selectedProject.achievements && (
              <div>
                <h4>Key Achievements:</h4>
                <p>{selectedProject.achievements}</p>
              </div>
            )}

            <div className="modal-links">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              )}
              {selectedProject.repo && (
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
