import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container-narrow">
        <div className="contact__inner">
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact__title">
            Let's build something <em>thoughtful</em>.
          </h2>
          <span className="rule" style={{ margin: "1.5rem auto" }}></span>
          <p className="contact__lede">
            I'm currently open to full time roles in software engineering, data
            science, and applied AI. If you have a project, a team, or just a
            question, I'd love to hear from you.
          </p>

          <a href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
          </a>

          <div className="contact__links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="dot">/</span>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            <span className="dot">/</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
