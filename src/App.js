import React, { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import AboutMe from './Components/AboutMe/AboutMe'
import Work from './Components/Work/Work'
import Skills from './Components/Skills/Skills'
// import Passion from './Components/Passion/Passion'
import Contact from './Components/Contact/Contact'
import Landing from './Components/Landing/Landing'
// import { IoKeySharp } from 'react-icons/io5'

function App() {
  // the following consts are all to assist in a swipe navigation in mobile views
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const pathStrings = {
    '/': 0,
    '/about': 1,
    '/work': 2,
    '/skills': 3,
    '/contact': 4
  }
  const pathNums = {
    0: '/',
    1: '/about',
    2: '/work',
    3: '/skills',
    4: '/contact'
  }

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    let currentString = location.pathname
    let currentNum = pathStrings[currentString]
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      if (currentNum + 1 > Object.keys(pathStrings).length - 1) {
        navigate(pathNums[0])
      } else {
        navigate(pathNums[currentNum + 1])
      }
    } else if (isRightSwipe) {
      if (currentNum - 1 < 0) {
        navigate(pathNums[Object.keys(pathStrings).length - 1])
      } else {
        navigate(pathNums[currentNum - 1])
      }
    }
  }

  return (
    <>
      <Nav />
      <main>
        <div className="App"></div>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutMe
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            }
          />
          <Route
            path="/work"
            element={
              <Work
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            }
          />
          <Route
            path="/skills"
            element={
              <Skills
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            }
          />
          {/* <Route
            path="/passion"
            element={
              <Passion
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            }
          /> */}
          <Route
            path="/contact"
            element={
              <Contact
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App
