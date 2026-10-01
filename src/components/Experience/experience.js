import "./experience.css";

export function Experience() {
  return `
    <section class="experience" id="experience">

      <div class="experience-heading">
        <span>EXPERIENCE</span>

        <h2>
          Learning by<br>
          building real things.
        </h2>
      </div>

      <div class="experience-list">

        <div class="experience-item">

          <div class="experience-date">
            2026
          </div>

          <div class="experience-content">
            <span>INTERNSHIP</span>

            <h3>Web Development Intern</h3>

            <h4>SkillCraft Technology</h4>

            <p>
              Worked on responsive web interfaces and
              JavaScript-based applications. Built interactive
              projects while improving practical frontend
              development skills.
            </p>

            <div class="experience-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>GitHub</span>
            </div>
          </div>

        </div>


        <div class="experience-item">

          <div class="experience-date">
            2026
          </div>

          <div class="experience-content">
            <span>PROJECT EXPERIENCE</span>

            <h3>AI & Full-Stack Development</h3>

            <h4>Personal Projects</h4>

            <p>
              Building AI-powered and full-stack applications
              focused on solving practical real-world problems
              using modern technologies.
            </p>

            <div class="experience-tags">
              <span>Python</span>
              <span>React</span>
              <span>FastAPI</span>
              <span>MongoDB</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  `;
}