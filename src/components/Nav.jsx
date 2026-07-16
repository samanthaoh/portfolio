import { profile } from "../content.js";

function Nav() {
  return (
    <nav className="nav">
      <span className="nav__mark">
        S<span className="nav__mark-dim">.</span>
      </span>
      <div className="nav__links">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="btn nav__resume" href={profile.resumeUrl} target="_blank" rel="noreferrer">
        Résumé ↗
      </a>
    </nav>
  );
}

export default Nav;
