import { useState } from "react";
import { profile } from "../content.js";

function Footer() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail(e) {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <footer id="contact" className="footer">
      <div className="app footer__inner">
        <div>
          <p className="eyebrow">End of Document</p>
          <h2>Let's talk</h2>
          <p>
            Open to product, data, and engineering conversations. Based in {profile.location}.
          </p>
        </div>
        <div className="footer__links">
          <a className="btn btn--solid" href={`mailto:${profile.email}`} onClick={handleCopyEmail}>
            {copied ? "Copied to clipboard ✓" : profile.email}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;