"use client";

import { useState } from "react";
import { curriculum } from "@/lib/site";
import ModuleCards from "@/components/ModuleCards";

export default function Curriculum() {
  const [open, setOpen] = useState(0);

  return (
    <section id="curriculum" className="overview-section">
      <span className="label">Course overview</span>
      <h2 className="title center-title">How the 12 weeks actually unfold.</h2>
      <div className="curr-meta">
        <span>5 modules</span>
        <span>3 specialisations</span>
        <span>Portfolio in week 12</span>
      </div>
      <div className="curr-list">
        {curriculum.map((mod, index) => {
          const isOpen = open === index;
          return (
            <article className={`curr-item${isOpen ? " is-open" : ""}`} key={mod.title}>
              <button
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span className="curr-index">{mod.index}</span>
                <span className="curr-head">
                  <strong>{mod.title}</strong>
                  <em>{mod.meta}</em>
                </span>
                <span className="curr-toggle" aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen ? (
                <ul>
                  {mod.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
      <ModuleCards />
    </section>
  );
}
