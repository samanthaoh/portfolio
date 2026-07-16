import { skills } from "../content.js";

function Skills() {
  return (
    <section id="skills">
      <div className="app">
        <p className="eyebrow">Materials</p>
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skills-group" key={group.group}>
              <p className="mono-tag skills-group__label">{group.group}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
