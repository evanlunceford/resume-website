import CrtHeadshot from "../components/CrtHeadshot";
import "../css/pages/About.css";
import "../css/components/SkillsSection.css";
import "../css/pages/Projects.css";


const stackGroups = [
  {
    label: "Frontend",
    color: "var(--teal)",
    tools: ["React", "TypeScript", "CSS", "Vite"],
  },
  {
    label: "Backend",
    color: "var(--orange)",
    tools: ["Python", "FastAPI", "Postgres", "SQL"],
  },
  {
    label: "Cloud & Other",
    color: "var(--dark-teal)",
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
  "/off-the-clock-pictures/02-piano.jpeg",
  "/off-the-clock-pictures/03-disc-golf.jpg",
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
            I approach my software design with an emphasis on elegance, efficiency, and user experience.
            The software I build is the product of my ability to solve a problem, similar to how a musician's songs are a product of their ability to transpose their thoughts 
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
              When I'm not working, there are several hobbies that occupy my free time.
              My creative outlet of choice is music, specfically drums and piano. I have been playing
              drums for a decade, and piano for 4 years. Because of my tenure in the trees of Flagstaff,
              I am also an avid disc golfer. And yes, there is a difference between a disc and a Frisbee...
            </p>
            <p className="about-lead">
              I also enjoy a good story. It could be a physical book, movie, or a single-player videogame. My favorite movie
              of all time is <i>Pursuit of Happyness</i> and my favorite videogame is <i>Fallout: New Vegas</i>.
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
        <div className="projects-section-header projects-section-header--banner">
          <div className="projects-title-banner" aria-hidden="true">
            <span className="projects-title-banner__stripe projects-title-banner__stripe--teal" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--orange" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--brown" />
          </div>
          <h2 className="projects-section-title projects-section-title--banner">
            My Go-To Tech Stack
          </h2>
        </div>

        <div className="skills-panel">
          <div className="skills-grid">
            {stackGroups.map((group) => (
              <div
                key={group.label}
                className="skills-column"
                style={{ '--cc': group.color } as React.CSSProperties}
              >
                <div className="skills-column-header">
                  <div className="skills-column-accent" />
                  <h3 className="skills-column-title">{group.label}</h3>
                </div>
                <ul className="skills-list">
                  {group.tools.map((tool, i) => (
                    <li
                      key={tool}
                      className="skill-card"
                      style={{
                        '--cc': group.color,
                        animationDelay: `${i * 0.07}s`,
                      } as React.CSSProperties}
                    >
                      <span className="skill-name">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
