import "./projects.css";

export function Projects() {
  return `
    <section class="projects" id="work">

      <div class="projects-heading">
        <span>WORK</span>

        <h2>
          Things I've built<br>
          along the way.
        </h2>
      </div>

      <div class="projects-grid">

        <article class="project-card">
          <img src="/images/projects/reviveai.png" alt="ReviveAI">

          <div class="project-info">
            <span>AI • FULL STACK</span>

            <h3>ReviveAI</h3>

            <p>
              AI-powered revenue recovery platform that helps
              businesses identify failed payments and automate
              recovery actions.
            </p>

            <a href="https://github.com/Ganesh-marathe/AI-Revenue-Recovery-Agent"
               target="_blank">
              View Project →
            </a>
          </div>
        </article>


        <article class="project-card">
          <img src="/images/projects/emission-detector.png"
               alt="Industrial Emission Detector">

          <div class="project-info">
            <span>AI • ENVIRONMENT</span>

            <h3>Emission Leak Detector</h3>

            <p>
              AI-based system designed to detect industrial
              emission hotspots and recommend circular alternatives.
            </p>

            <a href="#" target="_blank">
              View Project →
            </a>
          </div>
        </article>


        <article class="project-card">
          <img src="/images/projects/crop-ai.png"
               alt="AI Crop Recommendation">

          <div class="project-info">
            <span>AI • AGRICULTURE</span>

            <h3>AI Crop Recommendation</h3>

            <p>
              Machine learning project that uses agricultural
              data to recommend suitable crops.
            </p>

            <a href="#" target="_blank">
              View Project →
            </a>
          </div>
        </article>

      </div>

    </section>
  `;
}