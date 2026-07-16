import { profile, facets } from "../content.js";

const points = [
  { ...facets[0], x: 120, y: 90, align: "left" },
  { ...facets[1], x: 680, y: 90, align: "right" },
  { ...facets[2], x: 120, y: 360, align: "left" },
  { ...facets[3], x: 680, y: 360, align: "right" },
];

function Hero() {
  const cx = 400;
  const cy = 225;

  return (
    <header className="hero">
      <div className="app hero__inner">
        <p className="eyebrow">Introduction</p>
        <div className="hero-diagram">
          {points.map((p) => (
            <div
              key={p.tag}
              className={`hero-diagram__label hero-diagram__label--${p.align}`}
              style={{ left: `${(p.x / 800) * 100}%`, top: `${(p.y / 450) * 100}%` }}
            >
              <span className="mono-tag">FIG.{p.tag}</span>
              <span>{p.label}</span>
            </div>
          ))}

          <div className="hero-diagram__center">
            <h1>
              {profile.firstName} <span className="hero__lastname">{profile.lastName}</span>
            </h1>
            <p className="hero__role">{profile.role}</p>
          </div>
        </div>

        <ul className="hero-facets-mobile">
          {points.map((p) => (
            <li key={p.tag}>
              <span className="mono-tag">FIG.{p.tag}</span> {p.label}
            </li>
          ))}
        </ul>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a className="btn btn--solid" href={`mailto:${profile.email}`}>
            Get in touch
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
