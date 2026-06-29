import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Honors from "./components/Honors";
import Certifications from "./components/Certifications";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const pages = [
  { id: "home", label: "Home", Component: Hero },
  { id: "about", label: "About", Component: About },
  { id: "experience", label: "Experience", Component: Experience },
  { id: "honors", label: "Honors", Component: Honors },
  { id: "certifications", label: "Certifications", Component: Certifications },
  { id: "gallery", label: "Gallery", Component: Gallery },
  { id: "contact", label: "Contact", Component: Contact },
];

function getPageIdx() {
  const hash = window.location.hash.replace("#", "");
  const idx = pages.findIndex((p) => p.id === hash);
  return idx === -1 ? 0 : idx;
}

export default function App() {
  const [pageIdx, setPageIdx] = useState(getPageIdx);

  useEffect(() => {
    const onHashChange = () => {
      setPageIdx(getPageIdx());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const { Component } = pages[pageIdx];
  const next = pages[pageIdx + 1];

  return (
    <>
      <Nav />
      <main>
        <Component />
        {next && (
          <div className="page-nav">
            <div className="container page-nav__inner">
              <a href={`#${next.id}`} className="page-nav__next">
                <span className="page-nav__eyebrow">Next</span>
                <span className="page-nav__label">{next.label}</span>
                <span className="page-nav__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
