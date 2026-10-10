import "./about.css";

export function About() {
  return `
    <section class="about" id="about">

      <div class="about-header">
        <span class="about-label">ABOUT ME</span>

        <h2>
          Curious mind.<br>
          <span>Practical builder.</span>
        </h2>
      </div>

      <div class="about-main">

        <div class="about-description">

          <p class="about-lead">
            I'm Ganesh Marathe, an Artificial Intelligence
            and Data Science engineering student passionate
            about building useful technology.
          </p>

          <p>
            I work with Python, AI concepts, and full-stack
            development to turn ideas into practical applications.
            I enjoy learning by building projects and solving
            real-world problems through technology.
          </p>

          <a
            href="https://github.com/Ganesh-marathe/"
            target="_blank"
            rel="noopener noreferrer"
            class="about-github-link"
          >
            Explore my GitHub <span>↗</span>
          </a>

        </div>

        <div class="about-stats">

          <div class="about-stat">
            <span class="stat-number">7.14</span>
            <span class="stat-title">CGPA / 10</span>
            <span class="stat-description">
              Academic performance
            </span>
          </div>

          <div class="about-stat">
            <span class="stat-number">AI</span>
            <span class="stat-title">CORE INTEREST</span>
            <span class="stat-description">
              Artificial Intelligence & Data Science
            </span>
          </div>

          <div class="about-stat">
            <span class="stat-number">BUILD</span>
            <span class="stat-title">LEARNING APPROACH</span>
            <span class="stat-description">
              Practical projects and continuous learning
            </span>
          </div>

        </div>

      </div>

    </section>
  `;
}