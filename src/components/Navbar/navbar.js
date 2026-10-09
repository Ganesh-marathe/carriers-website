import "./navbar.css";

export function Navbar() {
  return `
    <nav class="navbar">

      <a href="#home" class="navbar-logo">
        Ganesh<span>.</span>
      </a>

      <div class="navbar-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
      </div>

      <a href="#contact" class="hire-button">
        Let's Talk <span>↗</span>
      </a>

    </nav>
  `;
}