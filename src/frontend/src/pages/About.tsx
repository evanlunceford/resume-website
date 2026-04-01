import CrtHeadshot from "../components/CrtHeadshot";
import ExperienceTimeline from "../components/ExperienceTimeline";
import "../css/pages/About.css";


const stackGroups = [
  {
    label: "Frontend",
    colorClass: "about-stack-band--teal",
    tools: ["React", "TypeScript", "CSS", "Vite"],
  },
  {
    label: "Backend",
    colorClass: "about-stack-band--orange",
    tools: ["Python", "FastAPI", "Postgres", "REST APIs"],
  },
  {
    label: "Data + Cloud",
    colorClass: "about-stack-band--dark-teal",
    tools: ["Pandas", "SQL", "Docker", "GCP"],
  },
];

const quickFacts = [
  "I excel in situations that call for leadership and communication.",
  "I enjoy the translation between business expectations and software implementation.",
  "I like to document my code, and ensure my code is self-documenting and readable.",
];

const offTheClockImages = [
  "/off-the-clock-pictures/disc-golf.jpg",
  "/off-the-clock-pictures/drums.jpg",
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__media">
          <CrtHeadshot />
        </div>

        <div className="about-hero__copy">
          <h1 className="about-title">About My Work</h1>
          <div className="about-title-divider" aria-hidden="true">
            <span className="about-title-divider__line about-title-divider__line--teal" />
            <span className="about-title-divider__line about-title-divider__line--orange" />
            <span className="about-title-divider__line about-title-divider__line--brown" />
          </div>
          <p className="about-lead">
            Some people enjoy crunching numbers, writing papers, or studying our Earth. It is their preferred way 
            to contribute to the world. Others, like me, enjoy creating new things that reflect themselves. 
            Musicians, artists, and (naturally) software engineers! Even the in-depth analytical systems I 
            have worked on have a certain elegance to them. The software I build is the product of my ability to 
            solve a problem, similar to how a musician's songs are a product of their ability to transpose their thoughts 
            into a musical context.
          </p>

          <div className="about-hero__fact-strip">
            {quickFacts.map((fact) => (
              <div key={fact} className="about-fact-chip">
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__layout about-otc__layout">
          <div className="about-story__copy about-hero__copy">
            <h2 className="about-title">Off The Clock</h2>
            <div className="about-title-divider" aria-hidden="true">
              <span className="about-title-divider__line about-title-divider__line--teal" />
              <span className="about-title-divider__line about-title-divider__line--orange" />
              <span className="about-title-divider__line about-title-divider__line--brown" />
            </div>
            <p className="about-lead">
              When I'm not working, there are several hobbies that occupy most of my free time.
              
            </p>
          </div>

          <div className="about-story__media">
            <CrtHeadshot
              ariaLabel="Off The Clock photo display"
              alt="Off The Clock hobby photos"
              className="about-story__crt"
              images={offTheClockImages}
              intervalMs={10000}
            />
          </div>
        </div>
      </section>

      <section className="about-stack">
        <div className="about-stack__panel">
          <div className="about-stack__screen about-hero__copy about-stack__copy">
            <h2 className="about-title about-stack__title">My Go-To Tech Stack</h2>
            <div className="about-title-divider about-stack__divider" aria-hidden="true">
              <span className="about-title-divider__line about-title-divider__line--teal" />
              <span className="about-title-divider__line about-title-divider__line--orange" />
              <span className="about-title-divider__line about-title-divider__line--brown" />
            </div>
            <div className="about-stack__bands">
              {stackGroups.map((group) => (
                <section key={group.label} className="about-stack-band">
                  <div className={`about-stack-band__label ${group.colorClass}`}>{group.label}</div>
                  <div className="about-stack-band__tools">
                    {group.tools.map((tool) => (
                      <span key={tool} className="about-stack-band__tool">
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
