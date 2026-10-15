import "./contact.css";

export function Contact() {
  return `
    <section class="contact" id="contact">

      <div class="contact-container">

        <div class="contact-heading">
          <span class="contact-label">GET IN TOUCH</span>

          <h2>
            Let's build something<br>
            <span>meaningful together.</span>
          </h2>

          <p>
            Looking for an AI & Data Science intern or a
            developer to collaborate with? Let's connect
            and explore opportunities.
          </p>
        </div>

        <div class="contact-content">

          <div class="contact-info">
            <span class="contact-small-label">CONTACT DETAILS</span>

            <a
              href="mailto:ganeshmarathe361@gmail.com"
              class="contact-email"
            >
              Email me <span>↗</span>
            </a>

            <div class="contact-divider"></div>

            <span class="contact-small-label">FIND ME ONLINE</span>

            <div class="contact-socials">

              <a
                href="https://github.com/Ganesh-marathe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>

              <a
                href="https://leetcode.com/u/ganesh__7071/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode <span>↗</span>
              </a>

              <a
                href="https://www.kaggle.com/ganeshmarath36"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kaggle <span>↗</span>
              </a>

            </div>
          </div>

          <div class="contact-cta">
            <span class="contact-cta-number">LET'S CONNECT</span>

            <h3>Have an opportunity<br>or an idea?</h3>

            <p>
              I'm always interested in learning,
              collaborating, and building useful technology.
            </p>

            <a
              href="mailto:ganeshmarathe361@gmail.com?subject=Portfolio%20Opportunity"
              class="contact-button"
            >
              Start a conversation <span>↗</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  `;
}