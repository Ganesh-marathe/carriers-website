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

        <a href="mailto:ganeshmarathe361@gmail.com">
          <span>Email</span>
          <strong>ganeshmarathe361@gmail.com →</strong>
        </a>

        <a href="https://github.com/Ganesh-marathe"
           target="_blank">
          <span>GitHub</span>
          <strong>View GitHub Profile →</strong>
        </a>

        <a href="https://www.linkedin.com/"
           target="_blank">
          <span>LinkedIn</span>
          <strong>Connect on LinkedIn →</strong>
        </a>

      </div>

    </section>
  `;
}

