import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="stats-band" aria-label="Course facts">
      {stats.map((item) => (
        <div className="stat" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
