import { profile, images } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid container">
        <div className="hero__text">
          <p className="eyebrow">Software Engineer &middot; Researcher</p>
          <h1 className="hero__title">
            Hello, I'm <em>Priscila</em>.
          </h1>
          <p className="hero__lede">{profile.intro}</p>
          <div className="hero__meta">
            <span>{profile.location}</span>
            <span className="dot">&bull;</span>
            <span>Open to full-time roles</span>
          </div>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--solid">
              Get in touch
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              View resume
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={images.portrait} alt="Portrait of Priscila Madrid" />
          </div>
          <div className="hero__portrait-tag">
            <span className="tag__line"></span>
            <span>El Paso, TX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
