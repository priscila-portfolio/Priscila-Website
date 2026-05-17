import { gallery } from "../data/content";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Moments</p>
          <h2>Conferences, awards, community.</h2>
          <span className="rule"></span>
          <p>
            A few snapshots from the conferences, scholarships, and chapter
            events that shaped my four years at UTEP.
          </p>
        </div>

        <div className="gallery__grid">
          {gallery.map((g, i) => (
            <figure className="gallery__item" key={i}>
              <div className="gallery__media">
                <img src={g.src} alt={g.caption} loading="lazy" />
              </div>
              <figcaption className="gallery__caption">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
