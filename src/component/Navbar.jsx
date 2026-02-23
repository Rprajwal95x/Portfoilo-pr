import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top" style={{ backgroundColor: "#0d1117" }}>
      <div className="container-fluid">
        {/* Brand */}
        <span 
          className="navbar-brand fw-bold fs-4" 
          style={{ color: "#00ccff", fontFamily: "'Cursive', sans-serif" }}
        >
          𝒫𝓇𝒶𝒿𝓌𝒶𝓁𝐻𝓊𝒷
        </span>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNavbar">
          {/* Left nav links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link text-light fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-medium" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-medium" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-medium" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* GitHub & Resume Buttons */}
          <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <a
                className="btn btn-outline-primary rounded-pill px-3 py-1 fw-semibold"
                href="https://github.com/Rprajwal95x"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-success rounded-pill px-3 py-1 fw-semibold"
                href="/2.1UPDATE PRAJWAL NARESH RAUT (2).pdf"
                download="Prajwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}