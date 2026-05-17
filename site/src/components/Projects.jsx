import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects.</h2>
          <span className="rule"></span>
          <p>
            A few things I've built. Some live in production, others are
            internal tools that quietly do their job.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-card__top">
                <span className="project-card__period">{p.period}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__role">{p.role}</p>
              </div>
              <p className="project-card__desc">{p.description}</p>
              <ul className="project-card__bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
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
