"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq">
      <span className="label">FAQ</span>
      <h2 className="title">Answers before you walk in.</h2>
      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div className="faq-item" key={item.q}>
              <button
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {item.q}
                <span aria-hidden="true">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen ? <p>{item.a}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
