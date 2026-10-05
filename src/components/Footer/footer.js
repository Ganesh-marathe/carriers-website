import "./footer.css";

export function Footer() {
  return `
    <footer class="footer">

      <div class="footer-left">
        <strong>Ganesh Marathe</strong>
        <span>AI & Data Science Student</span>
      </div>

      <div class="footer-links">
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="footer-socials">
        <a href="https://github.com/Ganesh-marathe/" target="_blank">GitHub</a>
        <a href="https://leetcode.com/u/ganesh__7071/" target="_blank">LeetCode</a>
        <a href="https://www.kaggle.com/ganeshmarath36" target="_blank">Kaggle</a>
        <a href="https://www.codechef.com/users/rcp_fy_25029" target="_blank">CodeChef</a>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Ganesh Marathe</span>
        <span>AI • Data Science • Full Stack</span>
      </div>

    </footer>
  `;
}