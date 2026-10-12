import "./experience.css";

export function Experience() {
  return `
    <section class="experience" id="experience">

      <div class="experience-header">
        <span class="experience-label">EXPERIENCE & JOURNEY</span>

        <h2>
          Learning by doing.<br>
          <span>Growing by building.</span>
        </h2>

        <p>
          My journey in software development, practical projects,
          and continuous technical learning.
        </p>
      </div>

      <div class="experience-timeline">

        <article class="experience-item">
          <div class="experience-marker">
            <span></span>
          </div>

          <div class="experience-content">
            <div class="experience-meta">
              <span class="experience-type">INTERNSHIP</span>
              <span class="experience-date">WEB DEVELOPMENT</span>
            </div>

            <h3>Web Development Intern</h3>

            <h4>SkillCraft Technology</h4>

            <p>
              Worked on practical frontend development tasks,
              building interactive and responsive web experiences
              using HTML, CSS, and JavaScript.
            </p>

            <div class="experience-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive Design</span>
            </div>
          </div>
        </article>

        <article class="experience-item">
          <div class="experience-marker">
            <span></span>
          </div>

          <div class="experience-content">
            <div class="experience-meta">
              <span class="experience-type">PROJECT EXPERIENCE</span>
              <span class="experience-date">BACKEND + AI</span>
            </div>

            <h3>ReviveAI Revenue Recovery Agent</h3>

            <h4>Personal Project</h4>

            <p>
              Developed a revenue recovery application using
              Python, FastAPI, and SQLite, with recovery logic
              and a dashboard to help track recovery cases.
            </p>

            <div class="experience-tags">
              <span>Python</span>
              <span>FastAPI</span>
              <span>SQLite</span>
              <span>REST API</span>
            </div>

            <a
              class="experience-link"
              href="https://github.com/Ganesh-marathe/AI-Revenue-Recovery-Agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project <span>↗</span>
            </a>
          </div>
        </article>

        <article class="experience-item">
          <div class="experience-marker">
            <span></span>
          </div>

          <div class="experience-content">
            <div class="experience-meta">
              <span class="experience-type">EDUCATION</span>
              <span class="experience-date">B.TECH</span>
            </div>

            <h3>Artificial Intelligence & Data Science</h3>

            <h4>R. C. Patel Institute of Technology</h4>

            <p>
              Building a foundation in programming, data science,
              algorithms, and software development while applying
              my learning through practical projects.
            </p>

            <div class="experience-tags">
              <span>Programming</span>
              <span>Data Science</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </article>

      </div>

    </section>
  `;
}