import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import MyStory from '../pages/MyStory.jsx'
import Pricing from '../pages/Pricing.jsx'
import Landing from '../pages/Landing.jsx'
import Contact from '../pages/Contact.jsx'

function App() {

  return (
    <Router basename="/SarahKB">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
