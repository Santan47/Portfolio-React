import React from 'react'
import Home from './components/Home/Home'
import Nav from './components/Navigation/Nav'
import Projects from './components/Projects/Project'
import Blogs from './components/Blogs/Blogs'
import Education from './components/Education/Education'
import Contacts from './components/Contacts/Contacts'
import './index.js'
import './index.css'

const App = () => {
  return (
    <>
      <Home/>
      <Education/>
      <Projects/>
      {/* <Blogs/>
      <Contacts/> */}
      <Nav/>
    </>
  )
}

export default App