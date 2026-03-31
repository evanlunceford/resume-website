import CrtHeadshot from "../components/CrtHeadshot";
import ExperienceTimeline from "../components/ExperienceTimeline";
import "../css/pages/About.css";

const storyBlocks = [
  {
    title: "Outside The Editor",
    eyebrow: "Hobbies",
    body: [
      "Placeholder copy for the part where I talk about what I do when I am not building software and how those interests shape the way I think.",
      "Another sentence can live here to add a little personality, mention a routine, or point to the kinds of projects I naturally gravitate toward.",
    ],
  },
  {
    title: "Favorite Things",
    eyebrow: "Preferences",
    body: [
      "This is a good place for a few quick details about the media, games, environments, or creative work that keep me inspired and curious.",
      "You can also use this card to mention the kinds of problems you enjoy solving most or the style of collaboration you tend to enjoy.",
    ],
  },
  {
    title: "How I Work",
    eyebrow: "Approach",
    body: [
      "Use this section to describe the rhythm of how you like to build: thoughtful planning, fast iteration, careful cleanup, and finishing with polish.",
      "It can also hold a short note about communication, ownership, and the kind of team energy you try to bring into a project.",
    ],
  },
];

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
        <div className="about-section-heading">
          <div className="about-section-heading__title">
            <h2>Off The Clock</h2>
            <div className="about-section-heading__underline" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <img src="/about-me.svg" alt="" className="about-section-heading__icon" />
        </div>

        <div className="about-story__grid">
          {storyBlocks.map((block) => (
            <article key={block.title} className="about-story-card">
              <span className="about-story-card__eyebrow">{block.eyebrow}</span>
              <h3>{block.title}</h3>
              {block.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="about-stack">
        <div className="about-section-heading">
          <div className="about-section-heading__title">
            <h2>Preferred Stack</h2>
            <div className="about-section-heading__underline" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <img src="/skills.svg" alt="" className="about-section-heading__icon" />
        </div>

        <div className="about-stack__panel">
          <div className="about-stack__screen">
            <div className="about-stack__header">
              <span className="about-stack__status">Preferred Setup</span>
              <span className="about-stack__label">Retro Signal Board</span>
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

            <div className="about-stack__footer">
              <span>Built for shipping, iteration, and clean handoff.</span>
              <span className="about-stack__footer-accent">Stable / Flexible / Practical</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-experience">
        <div className="about-section-heading">
          <div className="about-section-heading__title">
            <h2>Experience</h2>
            <div className="about-section-heading__underline" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <img src="/experience.svg" alt="" className="about-section-heading__icon" />
        </div>

        <div className="about-experience__timeline">
          <ExperienceTimeline />
        </div>
      </section>
    </main>
  );
}
