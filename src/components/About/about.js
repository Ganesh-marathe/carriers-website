import "./about.css";

export function About() {
  return `
    <section class="about" id="about">

      <div class="about-top">
        <span class="about-label">ABOUT</span>

        <h2>
          An AI & Data Science student
          
          who happens to build code.
        </h2>
      </div>

      <div class="about-stats">

        <div class="about-card">
          <h3>7.14</h3>
          <p>Current CGPA</p>
          <span>B.Tech AI&DS, RCPIT Shirpur</span>
        </div>

        <div class="about-card">
  <h3>7.14</h3>
  <p>Current CGPA</p>
  <span>B.Tech AI & DS</span>
</div>

<div class="about-card">
  <h3>3+</h3>
  <p>Major Projects</p>
  <span>AI & Full Stack</span>
</div>

<div class="about-card">
  <h3>AI</h3>
  <p>Primary Focus</p>
  <span>ML & Data Science</span>
</div>

      <div class="about-description">
        <p>
          I am Ganesh Marathe, a B.Tech Artificial Intelligence
          and Data Science student focused on building practical
          AI-powered and full-stack applications.
        </p>

        <p>
          I enjoy solving real-world problems using Python,
          machine learning, modern web technologies, and data.
          My goal is to turn ideas into useful, working products.
        </p>
      </div>

    </section>
  `;
}