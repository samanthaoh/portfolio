import { leadership } from "../content.js";

function Leadership() {
  return (
    <section id="leadership">
      <div className="app">
        <p className="eyebrow">Field Notes</p>
        <h2>Leadership</h2>

        <article className="rev-entry rev-entry--single">
          <div className="rev-entry__body">
            <div className="rev-entry__head">
              <h3>{leadership.org}</h3>
            </div>
            <p className="rev-entry__role">{leadership.role}</p>
            <ul>
              {leadership.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Leadership;
