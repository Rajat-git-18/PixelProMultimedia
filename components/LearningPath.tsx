"use client";

import { useEffect, useRef } from "react";
import { journey } from "@/lib/site";

export default function LearningPath() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!wrap || !path || !svg) return;

    const updateFlow = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      path.style.strokeDasharray = String(total);
      svg.setAttribute("viewBox", `0 0 2 ${total}`);
      path.setAttribute("d", `M1,0 L1,${total}`);
      const progress = Math.max(0, Math.min(1, (vh * 0.75 - rect.top) / total));
      path.style.strokeDashoffset = String(total * (1 - progress));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    window.addEventListener("scroll", updateFlow, { passive: true });
    window.addEventListener("resize", updateFlow);
    updateFlow();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateFlow);
      window.removeEventListener("resize", updateFlow);
    };
  }, []);

  return (
    <section id="journey">
      <span className="label">Learning Path</span>
      <h2 className="title">How training actually progresses — stage by stage.</h2>
      <div className="flow-wrap" ref={wrapRef}>
        <svg
          className="flow-line-svg"
          ref={svgRef}
          viewBox="0 0 2 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path ref={pathRef} d="M1,0 L1,800" />
        </svg>
        {journey.map((step, index) => (
          <div
            className="flow-step"
            key={step.node}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
          >
            <div className="flow-node">{step.node}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <span className="flow-tag">{step.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
