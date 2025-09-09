import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:jan.horak.dev@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Let's discuss your next project or just say hello!
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in hearing about new opportunities,
            interesting projects, or just having a chat about technology.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:jan.horak.dev@gmail.com">
                  jan.horak.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/jan-horak-33bb3280/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-icon">📦</span>
              <div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/MrJanHorak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out my code
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
