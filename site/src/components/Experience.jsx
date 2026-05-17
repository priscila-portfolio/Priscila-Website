import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where I've worked.</h2>
          <span className="rule"></span>
          <p>
            Research, software engineering, and quality assurance roles across
            five organizations.
          </p>
        </div>

        <div className="experience__list">
          {experience.map((item, idx) => (
            <article
              className={`exp-card ${item.image ? "" : "exp-card--no-media"}`}
              key={`${item.company}-${idx}`}
            >
              {item.image && (
                <div className="exp-card__media">
                  <img src={item.image} alt={item.company} />
                </div>
              )}
              <div className="exp-card__body">
                <div className="exp-card__meta">
                  <span className="exp-card__period">{item.period}</span>
                  <span className="exp-card__loc">{item.location}</span>
                </div>
                <h3 className="exp-card__role">{item.role}</h3>
                <p className="exp-card__company">{item.company}</p>
                <ul className="exp-card__bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {item.poster && (
                  <a
                    className="exp-card__poster"
                    href={item.poster}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Research Poster →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
