import "./hero.css";

export function Hero() {
  return `
    <section class="hero" id="home">

      <div class="hero-content">

        <span class="hero-badge">AVAILABLE FOR OPPORTUNITIES</span>

        <h1>
          Building intelligent
          <br>
          AI solutions.
        </h1>

        <p class="hero-description">
  Third-year B.Tech Artificial Intelligence & Data Science student
  building practical AI-powered and full-stack applications.
</p>

        <div class="hero-buttons">
          <a href="#work" class="hero-primary">View My Work</a>
          <a href="/resume.pdf" class="hero-secondary">View Resume</a>
        </div>

        <div class="hero-tags">
           <span>AI & Data Science</span>
           <span>Python</span>
           <span>Full Stack Development</span>
        </div>

      </div>

      <div class="hero-card">
        <img src="/images/profile.jpg" alt="Ganesh Marathe">

        <div class="hero-card-footer">
          <span>Currently building — AI Projects</span>
          <span class="live-status">● Available</span>
        </div>
      </div>

    </section>
  `;
}