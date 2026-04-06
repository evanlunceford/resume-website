import CrtHeadshot from "../components/CrtHeadshot";
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
    tools: ["Python", "FastAPI", "Postgres", "SQL"],
  },
  {
    label: "Cloud & Other",
    colorClass: "about-stack-band--dark-teal",
    tools: ["GCS", "Docker", "Vercel", "Github"],
  },
];

const quickFacts = [
  "I excel in situations that call for leadership and communication.",
  "I enjoy the translation between business expectations and software implementation.",
  "I thrive the most in a full stack environment where I understand the entire codebase.",
];

const offTheClockImages = [
  "/off-the-clock-pictures/01-drums.jpg",
  "/off-the-clock-pictures/02-disc-golf.jpg",
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
          <p className="about-lead">
            In terms of how I work, here are a few facts:
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
              My creative outlet of choice is music, specfically drums and piano. I have been playing
              drums for a decade, and piano for 4 years. Because of my tenure in the trees of Flagstaff,
              I am also an avid disc golfer. And yes, there is a difference between a disc and a Frisbee...
            </p>
            <p className="about-lead">
              I also enjoy programming, and spend lots of my time working on fun projects that do something cool.
              While projects I do for work are often focused on software that can make money, my personal projects
              usually focus more on ideas that I find interesting.
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
