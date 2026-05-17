import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Priscila Madrid</span>
          <span className="footer__tag">Computer Science &middot; UTEP &apos;25</span>
        </div>
        <div className="footer__nav">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        <p className="footer__copy">&copy; {year} Priscila Madrid. El Paso, TX.</p>
      </div>
    </footer>
  );
}
