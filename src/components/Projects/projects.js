import "./projects.css";

export function Projects() {
  return `
    <section class="projects" id="work">

      <div class="projects-header">
        <div>
          <span class="projects-label">SELECTED WORK</span>

          <h2>
            Projects that solve<br>
            real problems.
          </h2>
        </div>

        <p class="projects-intro">
          A selection of AI-powered and full-stack applications
          built to explore ideas and solve practical problems.
        </p>
      </div>

      <div class="projects-grid">

        <!-- Project 1 -->
        <article class="project-card">

          <div class="project-image">
            <img
              src="/images/projects/reviveai.png"
              alt="ReviveAI Revenue Recovery Agent"
            />

            <span class="project-number">01</span>
          </div>

          <div class="project-info">

            <div class="project-tech">
              <span>PYTHON</span>
              <span>FASTAPI</span>
              <span>AI</span>
            </div>

            <h3>ReviveAI</h3>

            <p>
              An AI-powered revenue recovery platform designed
              to track failed payments, organize recovery cases,
              and support automated recovery workflows.
            </p>

            <a
              href="https://github.com/Ganesh-marathe/AI-Revenue-Recovery-Agent"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              Explore Project <span>↗</span>
            </a>

          </div>
        </article>


        <!-- Project 2 -->
        <article class="project-card">

          <div class="project-image">
            <img
              src="/images/projects/emission-detector.png"
              alt="Industrial Emission Detector"
            />

            <span class="project-number">02</span>
          </div>

          <div class="project-info">

            <div class="project-tech">
              <span>AI</span>
              <span>DATA ANALYSIS</span>
              <span>SUSTAINABILITY</span>
            </div>

            <h3>Industrial Emission Detector</h3>

            <p>
              A project concept focused on identifying industrial
              emission hotspots and recommending circular
              alternatives using data-driven analysis.
            </p>

            <span class="project-status">
              Project in development
            </span>

          </div>
        </article>


        <!-- Project 3 -->
        <article class="project-card">

          <div class="project-image">
            <img
              src="/images/projects/crop-ai.png"
              alt="AI Crop Recommendation"
            />

            <span class="project-number">03</span>
          </div>

          <div class="project-info">

            <div class="project-tech">
              <span>MACHINE LEARNING</span>
              <span>AGRICULTURE</span>
            </div>

            <h3>AI Crop Recommendation</h3>

            <p>
              A machine-learning project idea focused on using
              agricultural data to help identify suitable crops
              for different growing conditions.
            </p>

            <span class="project-status">
              Project concept
            </span>

          </div>
        </article>

      </div>

      <div class="projects-footer">
        <span>BUILDING • LEARNING • IMPROVING</span>

        <a
          href="https://github.com/Ganesh-marathe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on GitHub ↗
        </a>
      </div>

    </section>
  `;
}