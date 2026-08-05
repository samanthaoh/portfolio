import { useState } from "react";
import { profile, facets, status } from "../content.js";

function Hero() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail(e) {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <header className="hero">
      <div className="app hero__inner">
        <p className="eyebrow">Introduction</p>

        <h1 className="hero__name">
          {profile.firstName} <span className="hero__lastname">{profile.lastName}</span>
        </h1>
        <p className="hero__role">{profile.role}</p>

        <p className="hero__tagline">{profile.tagline}</p>

        <p className="hero__status mono-tag">{status}</p>

        <ul className="hero-facets">
          {facets.map((f) => (
            <li key={f.tag}>
              <span className="hero-facets__tag">{f.tag}</span>
              {f.label}
            </li>
          ))}
        </ul>

        <div className="hero__cta">
          <a className="btn btn--solid" href={`mailto:${profile.email}`} onClick={handleCopyEmail}>
            {copied ? "Copied to clipboard ✓" : "Get in touch"}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;