import React from "react";
import { Menu, X } from "lucide-react";
import "./Navbar/components.css";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <h1 className="logo">Tutor4Kids</h1>

        {/* Desktop nav */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
          <button
            className="signup-btn"
            onClick={() => alert("Sign Up clicked!")}
          >
            Sign Up
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobile-dropdown">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#courses" onClick={() => setOpen(false)}>Courses</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <button
            className="signup-btn"
            onClick={() => {
              setOpen(false);
              alert("Sign Up clicked!");
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
