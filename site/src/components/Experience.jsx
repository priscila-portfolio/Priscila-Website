import { experience, projects, volunteering } from "../data/content";
import "./Experience.css";

function ExpCard({ item }) {
  const title = item.name || item.role;
  const subtitle = item.name ? item.role : item.company;
  const media = item.images || (item.image ? [item.image] : []);
  return (
    <article className={`exp-card ${media.length ? "" : "exp-card--no-media"}`}>
      {media.length > 0 && (
        <div
          className={`exp-card__media ${
            media.length > 1 ? "exp-card__media--stack" : ""
          }`}
        >
          {media.map((src, i) => (
            <img src={src} alt={title} key={i} />
          ))}
        </div>
      )}
      <div className="exp-card__body">
        <div className="exp-card__meta">
          <span className="exp-card__period">{item.period}</span>
          <span className="exp-card__loc">{item.location}</span>
        </div>
        <h3 className="exp-card__role">{title}</h3>
        <p className="exp-card__company">
          {item.companyLink ? (
            <a
              className="exp-card__company-link"
              href={item.companyLink}
              target="_blank"
              rel="noreferrer"
            >
              {subtitle}
            </a>
          ) : (
            subtitle
          )}
        </p>
        <ul className="exp-card__bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {(item.poster || item.profile || item.link) && (
          <div className="exp-card__links">
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
            {item.profile && (
              <a
                className="exp-card__poster"
                href={item.profile}
                target="_blank"
                rel="noreferrer"
              >
                View MSRP Profile →
              </a>
            )}
            {item.link && (
              <a
                className="exp-card__poster"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.linkLabel || "Learn more →"}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

const groups = [
  {
    id: "professional",
    eyebrow: "01 — Professional Experience",
    title: "Where I've worked.",
    items: experience,
  },
  {
    id: "projects",
    eyebrow: "02 — Projects",
    title: "Built along the way.",
    items: projects,
  },
  {
    id: "volunteering",
    eyebrow: "03 — Volunteering",
    title: "Giving time back.",
    items: volunteering,
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        {groups.map((group, gIdx) => (
          <div key={group.id} className="experience__group">
            <div
              className={`section-head experience__group-head ${
                gIdx === 0 ? "experience__group-head--first" : ""
              }`}
            >
              <p className="eyebrow">{group.eyebrow}</p>
              <h2>{group.title}</h2>
              <span className="rule"></span>
            </div>
            <div className="experience__list">
              {group.items.map((item, idx) => (
                <ExpCard item={item} key={`${group.id}-${idx}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
