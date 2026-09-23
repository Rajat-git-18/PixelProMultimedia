"use client";

import { useState } from "react";
import { modules } from "@/lib/site";

export default function ModuleCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div id="modules" className="module-library">
      <span className="label">Inside the tools</span>
      <h3 className="title center-title module-title">
        Hover a card. See what&apos;s actually inside.
      </h3>
      <div className="cards-grid">
        {modules.map((mod, index) => (
          <div
            className={`flip-card${flipped === index ? " is-flipped" : ""}`}
            key={mod.title}
          >
            <div className="flip-inner">
              <div className="flip-front">
                <span className="tag">{mod.tag}</span>
                <h4>{mod.title}</h4>
              </div>
              <div className="flip-back">
                <h4>{mod.title}</h4>
                <p>{mod.body}</p>
              </div>
            </div>
            <button
              className="flip-trigger"
              aria-label={`Flip ${mod.title} card`}
              onClick={() =>
                setFlipped((current) => (current === index ? null : index))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
