import React, { useState } from 'react'
import { work, links, repositories, projectPics } from '../../assets/data'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)
  // Track current image index for each project card
  const [imageIndexes, setImageIndexes] = useState(() =>
    Array(work.length).fill(0)
  )
  // Track image index for modal
  const [modalImageIndex, setModalImageIndex] = useState(0)

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

  const openProjectModal = (project, idx) => {
    setSelectedProject(project)
    setModalImageIndex(imageIndexes[idx] || 0)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    setModalImageIndex(0)
  }

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A selection of projects I've worked on recently
      </p>

      <div className="projects-grid">
        {displayedProjects.map((project, idx) => {
          const currentImageIdx = imageIndexes[project.id] || 0
          const images = project.images
          const currentImage = images[currentImageIdx]
          return (
            <div key={project.id} className="project-card">
              {images.length > 0 && (
                <div style={{ position: 'relative' }}>
                  <img
                    src={currentImage}
                    alt={project.title}
                    className="project-image"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        className="carousel-arrow left"
                        style={{
                          position: 'absolute',
                          left: 10,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          zIndex: 2
                        }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setImageIndexes((prev) => {
                            const arr = [...prev]
                            arr[project.id] =
                              (currentImageIdx - 1 + images.length) %
                              images.length
                            return arr
                          })
                        }}
                        aria-label="Previous image"
                      >
                        ◀
                      </button>
                      <button
                        className="carousel-arrow right"
                        style={{
                          position: 'absolute',
                          right: 10,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          zIndex: 2
                        }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setImageIndexes((prev) => {
                            const arr = [...prev]
                            arr[project.id] =
                              (currentImageIdx + 1) % images.length
                            return arr
                          })
                        }}
                        aria-label="Next image"
                      >
                        ▶
                      </button>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: 4,
                          zIndex: 2
                        }}
                      >
                        {images.map((_, i) => (
                          <span
                            key={i}
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background:
                                i === currentImageIdx ? '#333' : '#ccc',
                              display: 'inline-block',
                              cursor: 'pointer'
                            }}
                            onClick={(e) => {
                              e.stopPropagation()
                              setImageIndexes((prev) => {
                                const arr = [...prev]
                                arr[project.id] = i
                                return arr
                              })
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
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
                    onClick={() => openProjectModal(project, project.id)}
                  >
                    <span>ℹ️</span> Details
                  </button>
                </div>
              </div>
            </div>
          )
        })}
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
            {/* Modal carousel */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <img
                  src={selectedProject.images[modalImageIndex]}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    maxHeight: 350,
                    objectFit: 'contain',
                    borderRadius: 8
                  }}
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="carousel-arrow left"
                      style={{
                        position: 'absolute',
                        left: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2
                      }}
                      onClick={() =>
                        setModalImageIndex(
                          (modalImageIndex -
                            1 +
                            selectedProject.images.length) %
                            selectedProject.images.length
                        )
                      }
                      aria-label="Previous image"
                    >
                      ◀
                    </button>
                    <button
                      className="carousel-arrow right"
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2
                      }}
                      onClick={() =>
                        setModalImageIndex(
                          (modalImageIndex + 1) % selectedProject.images.length
                        )
                      }
                      aria-label="Next image"
                    >
                      ▶
                    </button>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 4,
                        zIndex: 2
                      }}
                    >
                      {selectedProject.images.map((_, i) => (
                        <span
                          key={i}
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: i === modalImageIndex ? '#333' : '#ccc',
                            display: 'inline-block',
                            cursor: 'pointer'
                          }}
                          onClick={() => setModalImageIndex(i)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
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
