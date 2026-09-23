import { learnSkills } from "@/lib/site";

export default function LearnGrid() {
  return (
    <section id="learn">
      <span className="label">What you will learn</span>
      <h2 className="title">Tools and craft you leave with.</h2>
      <div className="learn-grid">
        {learnSkills.map((skill) => (
          <div className="learn-chip" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
