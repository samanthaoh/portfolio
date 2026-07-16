import { projects } from "../content.js";

function Projects() {
  return (
    <section id="projects">
      <div className="app">
        <p className="eyebrow">Spec Sheets</p>
        <h2>Projects</h2>

        <div className="spec-grid">
          {projects.map((project) => (
            <article className="spec-card" key={project.name}>
              <div className="spec-card__head">
                <h3>{project.name}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="mono-tag spec-card__link">
                  VIEW ↗
                </a>
              </div>
              <p className="spec-card__tagline">{project.tagline}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tag-row">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
