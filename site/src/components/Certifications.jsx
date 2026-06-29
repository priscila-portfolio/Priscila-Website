import { certifications } from "../data/content";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section className="certs" id="certifications">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Certifications</p>
          <h2>Anthropic coursework.</h2>
          <span className="rule"></span>
          <p>{certifications.note}</p>
        </div>

        <div className="certs__grid">
          {certifications.groups.map((group) => (
            <div key={group.label} className="certs__group">
              <h3 className="certs__group-title">{group.label}</h3>
              <ul className="certs__list">
                {group.items.map((cert) => (
                  <li key={cert.title} className="certs__item">
                    <span className="certs__title">{cert.title}</span>
                    <span className="certs__meta">
                      <span className="certs__issuer">
                        {certifications.issuer}
                      </span>
                      {cert.date && (
                        <span className="certs__date">{cert.date}</span>
                      )}
                      {cert.verify && (
                        <a
                          className="certs__verify"
                          href={cert.verify}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Verify
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
