import "./contact.css";

export function Contact() {
  return `
    <section class="contact" id="contact">

      <div class="contact-heading">
        <span>CONTACT</span>

        <h2>
          Let's build something
          <br>
          useful together.
        </h2>

        <p>
          I'm open to internships, opportunities, collaborations,
          and interesting AI & software projects.
        </p>
      </div>

      <div class="contact-links">

        <a href="mailto:ganeshmarathe9552@gmail.com">
          <span>Email</span>
          <strong>ganeshmarathe9552@gmail.com →</strong>
        </a>

        <a href="https://github.com/Ganesh-marathe/"
           target="_blank">
          <span>GitHub</span>
          <strong>View GitHub Profile →</strong>
        </a>

        <a href="https://leetcode.com/u/ganesh__7071/"
           target="_blank">
          <span>LeetCode</span>
          <strong>View Coding Profile →</strong>
        </a>

        <a href="https://www.kaggle.com/ganeshmarath36"
           target="_blank">
          <span>Kaggle</span>
          <strong>View Kaggle Profile →</strong>
        </a>

        <a href="https://www.codechef.com/users/rcp_fy_25029"
           target="_blank">
          <span>CodeChef</span>
          <strong>View CodeChef Profile →</strong>
        </a>

      </div>

    </section>
  `;
}