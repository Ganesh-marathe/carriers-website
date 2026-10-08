import "./hero.css";

export function Hero() {
  return `
    <section class="hero" id="home">

      <div class="hero-content">

        <div class="hero-status">
          <span class="status-dot"></span>
          AVAILABLE FOR INTERNSHIPS & OPPORTUNITIES
        </div>

        <h1>
          Building
          <span>intelligent</span>
          digital products.
        </h1>

        <p class="hero-description">
          I'm Ganesh Marathe, a B.Tech Artificial Intelligence &
          Data Science student focused on AI, machine learning,
          and full-stack development.
        </p>

        <div class="hero-buttons">
          <a href="#work" class="hero-primary">
            View My Work
            <span>↗</span>
          </a>

          <a href="/resume.pdf"
             class="hero-secondary"
             target="_blank">
            View Resume
          </a>
        </div>

        <div class="hero-meta">
          <span>AI & Data Science</span>
          <span>Python</span>
          <span>Full Stack</span>
        </div>

      </div>


      <div class="hero-visual">

        <div class="hero-image-wrapper">
          <img
            src="/images/profile.jpg"
            alt="Ganesh Marathe"
          />
        </div>

        <div class="hero-info-card">

          <div>
            <span class="info-label">FOCUS</span>
            <strong>AI + Software</strong>
          </div>

          <div>
            <span class="info-label">CGPA</span>
            <strong>7.14 / 10</strong>
          </div>

          <div>
            <span class="info-label">BASED IN</span>
            <strong>Maharashtra, India</strong>
          </div>

        </div>

      </div>

    </section>
  `;
}