import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropDown = () => {
    setIsDropdownOpen(false);
  };

  console.log(isMobile);
  return (
    <div>
      <div className="header-container">
        <div className="name-header">
          <div className="box"></div>
          <h1>Ramakrishna M U /</h1>
          <h3>Software Developer Engineer</h3>
        </div>
        <div className="btn-header">
          {isMobile ? (
            <>
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                ☰
              </button>
              <div
                className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
                role="menu"
              >
                <button>
                  <Link className="link-style" to="/" onClick={handleDropDown}>
                    Home
                  </Link>
                </button>
                <button>
                  <Link
                    className="link-style"
                    to="/about"
                    onClick={handleDropDown}
                  >
                    About Me
                  </Link>
                </button>
                <button>
                  <Link
                    className="link-style"
                    to="/resume"
                    onClick={handleDropDown}
                  >
                    Resume
                  </Link>
                </button>
                <button>
                  <Link
                    className="link-style"
                    to="/projects"
                    onClick={handleDropDown}
                  >
                    Projects
                  </Link>
                </button>
                <button>
                  <Link
                    className="link-style"
                    to="/contact"
                    onClick={handleDropDown}
                  >
                    Contact
                  </Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <button>
                <Link className="link-style" to="/">
                  Home
                </Link>
              </button>
              <button>
                <Link className="link-style" to="/about">
                  About Me
                </Link>
              </button>
              <button>
                <Link className="link-style" to="/resume">
                  Resume
                </Link>
              </button>
              <button>
                <Link className="link-style" to="/projects">
                  Projects
                </Link>
              </button>
              <button>
                <Link className="link-style" to="/contact">
                  Contact
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
