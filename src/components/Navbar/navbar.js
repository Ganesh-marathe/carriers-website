import "./navbar.css";

export function Navbar() {
  return `
    <nav class="navbar">
      <a href="#home" class="navbar-logo">Ganesh Marathe</a>

      <div class="navbar-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" class="hire-button">Hire Me</a>
    </nav>
  `;
}