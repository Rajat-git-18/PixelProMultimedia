import { audience } from "@/lib/site";

export default function WhoFor() {
  return (
    <section id="who">
      <span className="label">Who this is for</span>
      <h2 className="title">Built for people who want a creative career.</h2>
      <div className="who-grid">
        {audience.map((item) => (
          <article className="who-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
