import React, { useState, useEffect } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import './ContentCard.css' // Import the CSS file

const ContentCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [currentProject, setCurrentProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  useEffect(() => {
    // Initialize the current image index for each project
    const initialIndexes = props.projectPics.reduce((acc, _, index) => {
      acc[index] = 0
      return acc
    }, {})
    setCurrentImageIndex(initialIndexes)
  }, [props.projectPics])

  useEffect(() => {
    const intervals = props.projectPics.map((project, index) => {
      if (project.type === 'multiple') {
        return setInterval(() => {
          setCurrentImageIndex((prevIndexes) => ({
            ...prevIndexes,
            [index]: (prevIndexes[index] + 1) % project.images.length
          }))
        }, 1500)
      }
      return null
    })

    return () => {
      intervals.forEach((interval) => {
        if (interval) clearInterval(interval)
      })
    }
  }, [props.projectPics])

  const openModal = (project, image) => {
    setCurrentProject(project)
    setCurrentImage(image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setCurrentImage(null)
    setCurrentProject(null)
  }

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal()
    }
  }

  return (
    <div className="slider-card">
      {props.work.map((element, index) => {
        const lines = element.split('\n\n')
        const title = lines.shift()
        const description = lines.join('\n\n')
        const projectPic = props.projectPics[index]

        return (
          <div
            key={index}
            className={`card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}
          >
            <div className="card-image-wrapper">
              <div className="image-stack">
                <img
                  src={projectPic.images[currentImageIndex[index]]}
                  alt={`${title} - ${currentImageIndex[index] + 1}`}
                  className={`project-image ${projectPic.type}`}
                  onClick={() =>
                    openModal(
                      projectPic,
                      projectPic.images[currentImageIndex[index]]
                    )
                  }
                />
              </div>
            </div>
            <div className="card-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <br />
              {props.links[index] ? (
                <a
                  href={props.links[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Explore the site
                </a>
              ) : (
                <p>Link coming soon!</p>
              )}

              {props.repositories[index] ? (
                <a
                  href={props.repositories[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Explore the code
                </a>
              ) : (
                <p>Repository coming soon!</p>
              )}
            </div>
          </div>
        )
      })}

      {modalOpen && (
        <div className="modal" onClick={handleBackgroundClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={currentImage} alt="Current" className="modal-image" />
            {currentProject.images.length > 1 && (
              <div className="thumbnail-container">
                {currentProject.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Thumbnail ${imgIndex + 1}`}
                    className="thumbnail"
                    onClick={() => setCurrentImage(image)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ContentCard
