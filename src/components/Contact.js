import React from "react";
import mailLogo from "../assets/mail.png";
import githubLogo from "../assets/github.png";
import leetcodeLogo from "../assets/leetcode.png";
import gfgLogo from "../assets/gfg.png";
import linkedinLogo from "../assets/linkedin.png";

function Contact() {
  const handleMailClick = () => {
    const email = atob("cHJlZXRpdmFyc2hhZEBnbWFpbC5jb20=");
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <div className="social-icons">
        <img
          src={mailLogo}
          alt="Mail"
          onClick={handleMailClick}
          style={{ cursor: "pointer" }}
        />

        <a
          href="https://github.com/preetibarshadash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" />
        </a>

        <a
          href="https://leetcode.com/u/preetibarsha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={leetcodeLogo} alt="LeetCode" />
        </a>

        <a
          href="https://www.geeksforgeeks.org/user/preetivarshadash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gfgLogo} alt="GeeksforGeeks" />
        </a>

        <a
          href="https://www.linkedin.com/in/preetibarsha-dash/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
