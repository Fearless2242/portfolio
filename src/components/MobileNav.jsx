// src/components/MobileNav.jsx
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav id="hamburger-nav">
      <div className="logo">FAVURR</div>
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${open ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${open ? "open" : ""}`}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;