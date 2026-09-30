import "./skills.css";

export function Skills() {
  return `
    <section class="skills" id="skills">

      <div class="skills-heading">
        <span>SKILLS</span>

        <h2>
          Tools I use to<br>
          build things.
        </h2>
      </div>

      <div class="skills-grid">

        <div class="skill-card">
          <h3>Programming</h3>

          <div class="skill-tags">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>C++</span>
          </div>
        </div>

        <div class="skill-card">
          <h3>AI & Data</h3>

          <div class="skill-tags">
            <span>Machine Learning</span>
            <span>Data Science</span>
            <span>NumPy</span>
            <span>Pandas</span>
          </div>
        </div>

        <div class="skill-card">
          <h3>Web Development</h3>

          <div class="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div class="skill-card">
          <h3>Tools</h3>

          <div class="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>FastAPI</span>
          </div>
        </div>

      </div>

    </section>
  `;
}