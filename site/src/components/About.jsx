import { about, profile } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner container">
        <div className="about__head">
          <p className="eyebrow">About</p>
          <h2 className="about__title">How I got here.</h2>
          <span className="rule"></span>
        </div>

        <div className="about__grid">
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="about__link"
            >
              Download full resume &rarr;
            </a>
          </div>

          <aside className="about__card">
            <h3 className="about__card-title">At a glance</h3>
            <ul className="about__list">
              {about.highlights.map((h) => (
                <li key={h.label}>
                  <span className="about__list-label">{h.label}</span>
                  <span className="about__list-value">{h.value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
