import { experience } from "../content.js";

function Experience() {
  return (
    <section id="experience">
      <div className="app">
        <p className="eyebrow">Revision Log</p>
        <h2>Experience</h2>

        <div className="rev-log">
          {experience.map((job, i) => (
            <article className="rev-entry" key={job.org}>
              <div className="rev-entry__index mono-tag">
                REV.{String(experience.length - i).padStart(2, "0")}
              </div>
              <div className="rev-entry__body">
                <div className="rev-entry__head">
                  <h3>{job.org}</h3>
                  <span className="mono-tag">{job.period}</span>
                </div>
                <p className="rev-entry__role">
                  {job.role} <span className="rev-entry__location">— {job.location}</span>
                </p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
