import "./skills.css";

export function Skills() {
  return `
    <section class="skills" id="skills">

      <div class="skills-header">
        <span class="skills-label">MY EXPERTISE</span>

        <h2>
          Skills that turn<br>
          <span>ideas into reality.</span>
        </h2>

        <p>
          Technologies and tools I use to build projects,
          solve problems, and continuously improve my skills.
        </p>
      </div>

      <div class="skills-grid">

        <article class="skill-card">
          <div class="skill-card-top">
            <span class="skill-index">01</span>
            <span class="skill-icon">⌘</span>
          </div>

          <h3>Programming</h3>

          <p>Writing clean code and developing problem-solving skills.</p>

          <div class="skill-tags">
            <span>Python</span>
            <span>C++</span>
            <span>JavaScript</span>
          </div>
        </article>

        <article class="skill-card">
          <div class="skill-card-top">
            <span class="skill-index">02</span>
            <span class="skill-icon">◈</span>
          </div>

          <h3>AI & Data Science</h3>

          <p>Exploring intelligent systems and data-driven solutions.</p>

          <div class="skill-tags">
            <span>Machine Learning</span>
            <span>Data Analysis</span>
            <span>AI Concepts</span>
          </div>
        </article>

        <article class="skill-card">
          <div class="skill-card-top">
            <span class="skill-index">03</span>
            <span class="skill-icon">⌘</span>
          </div>

          <h3>Web Development</h3>

          <p>Building responsive websites and full-stack applications.</p>

          <div class="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </article>

        <article class="skill-card">
          <div class="skill-card-top">
            <span class="skill-index">04</span>
            <span class="skill-icon">⚙</span>
          </div>

          <h3>Tools & Platforms</h3>

          <p>Using developer tools to build, test, and manage projects.</p>

          <div class="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>FastAPI</span>
          </div>
        </article>

      </div>

    </section>
  `;
}