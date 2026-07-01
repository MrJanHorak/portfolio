import React, { useCallback, useEffect, useRef, useState } from 'react'
import { work, links, repositories, projectPics } from '../../assets/data'

const WEBP_COMPATIBLE_EXT = /\.(png|jpe?g)$/i
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

const getWebpSource = (imagePath = '') => {
  if (!WEBP_COMPATIBLE_EXT.test(imagePath)) return null
  return imagePath.replace(WEBP_COMPATIBLE_EXT, '.webp')
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)
  // Track current image index for each project card
  const [imageIndexes, setImageIndexes] = useState(() =>
    Array(work.length).fill(0)
  )
  // Track image index for modal
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const modalRef = useRef(null)
  const previousFocusedElementRef = useRef(null)

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
  const modalImage = selectedProject?.images?.[modalImageIndex] || ''
  const modalImageWebp = getWebpSource(modalImage)

  const openProjectModal = (project, idx) => {
    if (document.activeElement instanceof HTMLElement) {
      previousFocusedElementRef.current = document.activeElement
    }
    setSelectedProject(project)
    setModalImageIndex(imageIndexes[idx] || 0)
  }

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null)
    setModalImageIndex(0)
  }, [])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [selectedProject, closeProjectModal])

  useEffect(() => {
    if (selectedProject) return

    if (previousFocusedElementRef.current) {
      previousFocusedElementRef.current.focus()
    }
  }, [selectedProject, closeProjectModal])

  useEffect(() => {
    if (!selectedProject || !modalRef.current) return undefined

    const modalElement = modalRef.current

    const getFocusableElements = () =>
      Array.from(modalElement.querySelectorAll(FOCUSABLE_SELECTOR))

    const initialFocusable = getFocusableElements()[0]
    if (initialFocusable) {
      initialFocusable.focus()
    } else {
      modalElement.focus()
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeProjectModal()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = getFocusableElements()

      if (focusableElements.length === 0) {
        event.preventDefault()
        modalElement.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey) {
        if (activeElement === firstElement || activeElement === modalElement) {
          event.preventDefault()
          lastElement.focus()
        }
        return
      }

      if (activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    modalElement.addEventListener('keydown', handleKeyDown)

    return () => {
      modalElement.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject, closeProjectModal])

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A selection of projects I've worked on recently
      </p>

      <div className="projects-grid">
        {displayedProjects.map((project) => {
          const currentImageIdx = imageIndexes[project.id] || 0
          const images = project.images
          const currentImage = images[currentImageIdx]
          const currentImageWebp = getWebpSource(currentImage)
          return (
            <div key={project.id} className="project-card">
              {images.length > 0 && (
                <div style={{ position: 'relative' }}>
                  <picture>
                    {currentImageWebp && (
                      <source srcSet={currentImageWebp} type="image/webp" />
                    )}
                    <img
                      src={currentImage}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
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
                      className="project-link project-link-primary"
                    >
                      <span>🔗</span> Live Demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-secondary"
                    >
                      <span>📦</span> GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    className="project-link project-link-secondary"
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
          <div
            className="project-modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeProjectModal}
              aria-label="Close project details"
            >
              ×
            </button>
            <div className="project-modal-layout">
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="project-modal-media">
                  <div className="project-modal-image-frame">
                    <picture>
                      {modalImageWebp && (
                        <source srcSet={modalImageWebp} type="image/webp" />
                      )}
                      <img
                        src={modalImage}
                        alt={selectedProject.title}
                        className="project-modal-image"
                        loading="eager"
                        decoding="async"
                      />
                    </picture>
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="carousel-arrow left"
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
                          type="button"
                          className="carousel-arrow right"
                          onClick={() =>
                            setModalImageIndex(
                              (modalImageIndex + 1) %
                                selectedProject.images.length
                            )
                          }
                          aria-label="Next image"
                        >
                          ▶
                        </button>
                        <div className="modal-image-dots">
                          {selectedProject.images.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              className={`carousel-dot ${
                                i === modalImageIndex ? 'active' : ''
                              }`}
                              onClick={() => setModalImageIndex(i)}
                              aria-label={`View screenshot ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="project-modal-content">
                <h3 id="project-modal-title" className="project-modal-title">
                  {selectedProject.title}
                </h3>
                <p className="project-modal-copy">{selectedProject.description}</p>

                {selectedProject.techStack && (
                  <div className="project-modal-section">
                    <h4>Technology Stack</h4>
                    <p className="project-modal-copy">{selectedProject.techStack}</p>
                  </div>
                )}

                {selectedProject.achievements && (
                  <div className="project-modal-section">
                    <h4>Key Achievements</h4>
                    <p className="project-modal-copy">
                      {selectedProject.achievements}
                    </p>
                  </div>
                )}

                <div className="modal-links">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-secondary"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
