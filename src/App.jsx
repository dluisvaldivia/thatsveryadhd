import React, {useEffect} from 'react'
import './styles/global.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './view/components/Navbar.jsx'
import Footer from './view/components/Footer.jsx'
import MyStory from './view/pages/MyStory.jsx'
/* import Pricing from './view/pages/Pricing.jsx' */
import Landing from './view/pages/Landing.jsx'
import Contact from './view/pages/Contact.jsx'
import NotFound from './view/pages/NotFound.jsx'
import Schedule from './view/pages/Schedule.jsx'
import BackToTop from './view/components/backToTop.jsx'
import PrivacyPolicy from './view/pages/PrivacyPolicy.jsx'
import TermsOfService from './view/pages/TermsOfService.jsx'
import AccessibilityStatement from './view/pages/AccessibilityStatement.jsx'
import {getInitialTheme, setTheme} from './controllers/themeController.js'


function App() {
  useEffect(() => {setTheme(getInitialTheme())}, []);


  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-of-service" element={<TermsOfService/>} />
        <Route path="/accessibility-statement" element={<AccessibilityStatement/>} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  )
}

export default App
