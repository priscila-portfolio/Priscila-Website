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

        <h3 className="honors__section-title">Honors</h3>
        <ol className="timeline" aria-label="Honors timeline">
          {honors.map((h, i) => (
            <li
              key={h.title}
              className={`timeline__item timeline__item--${
                i % 2 === 0 ? "left" : "right"
              }`}
            >
              <span className="timeline__node" aria-hidden="true"></span>
              <article className="timeline__card">
                <span className="timeline__year">{h.year}</span>
                <p className="timeline__title">{h.title}</p>
                {h.link && (
                  <a
                    className="timeline__link"
                    href={h.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {h.linkLabel || "View source"} &rarr;
                  </a>
                )}
              </article>
              {h.preview && (
                <figure className="timeline__preview" aria-hidden="true">
                  <img src={h.preview} alt="" loading="lazy" />
                </figure>
              )}
            </li>
          ))}
        </ol>

        <div className="honors__lower">
          <div className="honors__col">
            <h3 className="honors__col-title">Leadership</h3>
            <div className="leadership">
              <p className="leadership__role">{leadership.role}</p>
              <p className="leadership__org">
                {leadership.orgLink ? (
                  <a
                    className="leadership__org-link"
                    href={leadership.orgLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {leadership.org}
                  </a>
                ) : (
                  leadership.org
                )}
              </p>
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
