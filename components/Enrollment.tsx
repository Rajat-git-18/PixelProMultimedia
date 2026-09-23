import Link from "next/link";
import { enrollPlans } from "@/lib/site";

export default function Enrollment() {
  return (
    <section id="enroll">
      <span className="label">Get started</span>
      <h2 className="title">Two ways to join a batch.</h2>
      <div className="plan-grid">
        {enrollPlans.map((plan) => (
          <article
            className={`plan-card${plan.highlight ? " is-hot" : ""}`}
            key={plan.name}
          >
            <span className="plan-tag">{plan.tag}</span>
            <h3>{plan.name}</h3>
            <ul>
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link href={plan.href} className={plan.highlight ? "btn-primary" : "btn-ghost"}>
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
