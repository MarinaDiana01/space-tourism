import "./root-layout.css";
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import logoIcon from "../assets/shared/icon-logo.svg";
import hamburgerMenuIcon from "../assets/shared/icon-hamburger.svg";
import closeMenuIcon from "../assets/shared/icon-close.svg";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const currentPage = location.pathname;

  let backgroundPage = "";
  if (currentPage === "/home") {
    backgroundPage = "home-page-background";
  } else if (currentPage === "/destination") {
    backgroundPage = "destination-page-background";
  } else if (currentPage === "/crew") {
    backgroundPage = "crew-page-background";
  } else if (currentPage === "/technology") {
    backgroundPage = "technology-page-background";
  }

  return (
    <div className={`app-container ${backgroundPage}`}>
      <header className="header-container">
        <div>
          <img className="app-logo" src={logoIcon} alt="Logo" />
        </div>
        <button
          className="navbar-toggle"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <img
            src={isMenuOpen ? closeMenuIcon : hamburgerMenuIcon}
            className={isMenuOpen ? "navbar-close-menu-icon" : ""}
            alt="Menu Toggle"
          />
        </button>

        <nav className="navbar">
          <ul className={`navbar-container ${isMenuOpen ? "open" : ""}`}>
            <li className={currentPage === "/home" ? "active" : ""}>
              <Link to="/home">
                <span>00</span>Home
              </Link>
            </li>
            <li className={currentPage === "/destination" ? "active" : ""}>
              <Link to="/destination" onClick={toggleMenu}>
                <span>01</span>Destination
              </Link>
            </li>
            <li className={currentPage === "/crew" ? "active" : ""}>
              <Link to="/crew" onClick={toggleMenu}>
                <span>02</span>Crew
              </Link>
            </li>
            <li className={currentPage === "/technology" ? "active" : ""}>
              <Link to="/technology" onClick={toggleMenu}>
                <span>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
