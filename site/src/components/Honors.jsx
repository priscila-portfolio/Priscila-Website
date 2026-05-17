import { honors, leadership, skills } from "../data/content";
import "./Honors.css";

export default function Honors() {
  return (
    <section className="honors" id="honors">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Recognition &middot; Leadership &middot; Skills</p>
          <h2>Beyond the resume.</h2>
          <span className="rule"></span>
        </div>

        <div className="honors__grid">
          <div className="honors__col">
            <h3 className="honors__col-title">Honors</h3>
            <ul className="honors__list">
              {honors.map((h) => (
                <li key={h.title}>
                  <span className="honors__year">{h.year}</span>
                  <span className="honors__title">{h.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="honors__col">
            <h3 className="honors__col-title">Leadership</h3>
            <div className="leadership">
              <p className="leadership__role">{leadership.role}</p>
              <p className="leadership__org">{leadership.org}</p>
              <p className="leadership__period">{leadership.period}</p>
              <p className="leadership__desc">{leadership.description}</p>
            </div>
          </div>

          <div className="honors__col">
            <h3 className="honors__col-title">Skills</h3>
            <div className="skills">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="skills__group">
                  <p className="skills__label">{group}</p>
                  <p className="skills__items">{items.join(" / ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
