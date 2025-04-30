import React, { useState, useRef, useEffect } from 'react';
import { IoPricetagsOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import thatsveryadhd from '../../assests/thatsveryadhd.png';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true); // State for navbar collapse
  const navbarRef = useRef(null); // Reference to the navbar
  const toggleRef = useRef(null); // Reference to the toggle button

  // Handle closing the navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && !toggleRef.current.contains(event.target)) {
        setCollapsed(true); // Collapse navbar if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Function to handle navbar collapse manually
  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  // Function to close the navbar after a link is clicked
  const handleLinkClick = () => {
    if (!collapsed) {
      setCollapsed(true); // Close the navbar
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" id="navbar1" ref={navbarRef}>

        <Link to='/'><img src={thatsveryadhd} alt="Thats very adhd logo" className="navbar-brand ms-5 me-0" id="logo" target='/' /></Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleCollapseToggle}
          aria-controls="navbarNavDropdown"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
          ref={toggleRef}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!collapsed ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav icon-spacing ms-3">
            <li className="nav-item">
              <Link
                className="btn-primary nav-link text-center"
                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
              >

                <IoMdContacts className="nav-icon"/>
                <br />
                <span className="nav-text">Contact</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="btn-primary nav-link text-center"
                onClick={() => document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' })}
              >
                <RiCalendarScheduleLine className="nav-icon"/>
                <br />
                <span className="nav-text">Schedule</span>
              </Link>
            </li>
          </ul>

          {/* Push ThemeToggle to the right */}
          <div className="ms-auto">
            <ThemeToggle className="btn-primary nav-link" />
          </div>
        </div>
    </nav>
  );
}
