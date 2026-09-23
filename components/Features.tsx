import { features } from "@/lib/site";

export default function Features() {
  return (
    <section id="features">
      <span className="label">Course features</span>
      <h2 className="title">Why training here holds up on the job.</h2>
      <div className="feature-grid">
        {features.map((item) => (
          <article className="feature-card" key={item.index}>
            <span>{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
