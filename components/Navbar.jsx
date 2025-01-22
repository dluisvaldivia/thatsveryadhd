import React, { useState, useRef, useEffect } from 'react';
import { IoPricetagsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { Link } from 'react-router-dom';

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
    <nav className="navbar navbar-expand-lg bg-body-tertiary" ref={navbarRef}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5 me-3" onClick={handleLinkClick}>
          Sarah K.B.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleCollapseToggle}
          aria-controls="navbarNavDropdown"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
          ref={toggleRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${!collapsed ? 'show' : ''}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav icon-spacing ms-3">
            <li className="nav-item">
              <Link to="/my-story" className="nav-link" onClick={handleLinkClick}>
                <IoChatbubblesOutline />
                <br />
                My Story
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
                <IoMdContacts />
                <br />
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link" onClick={handleLinkClick}>
                <IoPricetagsOutline />
                <br />
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" onClick={handleLinkClick}>
                <CgProfile />
                <br />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
