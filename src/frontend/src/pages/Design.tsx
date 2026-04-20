import { Link } from "react-router-dom";
import CrtHeadshot from "../components/CrtHeadshot";
import { projects } from "../data/projects";
import "../css/pages/Design.css";

type PackageTier = {
  name: string;
  price: string;
  delivery: string;
  subscription: string;
  supportIncludes: string[];
  summary: string;
  scope: string[];
  bestFitFor: string[];
  exampleProjectName: string;
  testimonial: {
    name: string;
    title: string;
    quote: string;
    headshot: string;
    status: string;
  };
};

const packages: PackageTier[] = [
  {
    name: "Starter Website",
    price: "Starting at $1,250",
    delivery: "2 week delivery time",
    subscription: "$100/month",
    supportIncludes: [
      "Hosting, domain, and uptime monitoring check-ins.",
      "Security updates, plugin maintenance, and bug fixes.",
      "Monthly performance review with small copy or content updates.",
    ],
    summary: "A polished static marketing site for small businesses that need credibility, SEO basics, and a clear path to contact.",
    scope: [
      "Static website with 3 to 5 pages.",
      "Basic SEO and contact form.",
      "Monthly reports, growth emails, maintenance, and security support.",
    ],
    bestFitFor: [
      "Small businesses that need a professional web presence fast.",
      "Service providers who mainly want leads, trust, and clear contact paths.",
      "Teams that do not need logins, dashboards, or custom backend workflows yet.",
    ],
    exampleProjectName: "SW Bookkeeping",
    testimonial: {
      name: "Client quote pending",
      title: "Owner, SW Bookkeeping",
      quote: "Add a short quote here about clarity, trust, and the speed of delivery.",
      headshot: "/testimonial-sw-bookkeeping.svg",
      status: "Awaiting approved testimonial",
    },
  },
  {
    name: "Dynamic Website",
    price: "Starting at $7,500",
    delivery: "1 month delivery time",
    subscription: "$250/month",
    supportIncludes: [
      "Everything in the starter support plan.",
      "Database, auth, integration, and form-flow monitoring.",
      "Priority fixes plus a monthly bucket for feature refinements.",
    ],
    summary: "A production-ready product or business platform with a backend, user flows, automations, and reporting.",
    scope: [
      "Everything in the starter package, plus more pages.",
      "Backend, database, authentication, and API connections.",
      "Analytics dashboards, email services, and automations.",
    ],
    bestFitFor: [
      "Businesses that need customers or staff to log in and take actions online.",
      "Teams replacing manual processes with automations, dashboards, or integrations.",
      "Founders building a real product, portal, or internal operations platform.",
    ],
    exampleProjectName: "LeaseLift",
    testimonial: {
      name: "Client quote pending",
      title: "Founder, LeaseLift",
      quote: "Add a short quote here about shipping quickly, handling complexity, and building around business needs.",
      headshot: "/testimonial-leaselift.svg",
      status: "Awaiting approved testimonial",
    },
  },
  {
    name: "Custom Solutions",
    price: "Starting at $15,000",
    delivery: "Scoped per engagement",
    subscription: "$300/month",
    supportIncludes: [
      "Custom support scope based on your stack and business risk.",
      "Monitoring, maintenance, and incident response for critical systems.",
      "Ongoing roadmap work, experiments, and feature delivery as needed.",
    ],
    summary: "A custom software engagement for advanced research, scalable systems, and product ideas that go beyond a standard website.",
    scope: [
      "Anything I can do with software, scoped around your business problem.",
      "Advanced features like proprietary research and specialized workflows.",
      "Scalable backend systems for larger user bases and long-term growth.",
    ],
    bestFitFor: [
      "Organizations with a unique workflow that off-the-shelf tools do not handle well.",
      "Teams tackling complex data, research, or specialized operational systems.",
      "Businesses investing in software as a long-term advantage, not just a brochure site.",
    ],
    exampleProjectName: "SCOUT",
    testimonial: {
      name: "Client quote pending",
      title: "Leadership Team, SCOUT Workforce",
      quote: "Add a short quote here about ownership, architectural thinking, and building something that can scale.",
      headshot: "/testimonial-scout.svg",
      status: "Awaiting approved testimonial",
    },
  },
];

export default function Design() {
  const packageDetails = packages.map((tier) => ({
    ...tier,
    project: projects.find((entry) => entry.name === tier.exampleProjectName),
  }));

  return (
    <main className="design-page">
      <section className="design-hero">
        <div className="design-hero__copy">
          <div className="design-hero__layout">
            <div className="design-hero__content">
              <span className="design-eyebrow">Evan Lunceford Software Design</span>
              <h1 className="design-title">Software and web design for businesses that need more than just a template.</h1>
              <div className="design-title-divider" aria-hidden="true">
                <span className="design-title-divider__line design-title-divider__line--teal" />
                <span className="design-title-divider__line design-title-divider__line--orange" />
                <span className="design-title-divider__line design-title-divider__line--brown" />
              </div>
              <p className="design-lead">
                I design and build websites and software that feel intentional, solve real business problems, and stay maintainable after launch.
              </p>

              <div className="design-hero__actions">
                <a href="#design-packages" className="design-action-button">
                  <img src="/projects.svg" alt="" className="navbar-icon" />
                  <span>View Packages</span>
                </a>
                <a href="#contact" className="design-action-button design-action-button--secondary">
                  <img src="/mail.svg" alt="" className="navbar-icon" />
                  <span>Start a Project</span>
                </a>
              </div>
            </div>

            <div className="design-hero__screen">
              <CrtHeadshot
                className="design-hero__screen-frame"
                ariaLabel="EL Design headshot display"
                alt="Evan Lunceford headshot"
                images={["/evan-headshot.jpg"]}
                imageClassName="design-hero__screen-image"
                imageFit="cover"
                screenAspectRatio="4 / 5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="design-section" id="design-packages" aria-labelledby="design-packages-title">
        <div className="design-for">
          <div className="design-section__copy">
            <h2 className="design-section__title" id="design-for-title">Who I do my best work for</h2>
            <p>
              I am usually the best fit for businesses that need thoughtful execution, not just a nicer-looking website. The strongest results
              tend to come from teams that have a real business goal, a specific bottleneck, or a product idea that needs to be shaped carefully.
            </p>
          </div>

          <div className="design-for__grid" aria-labelledby="design-for-title">
            <article className="design-panel design-for__card">
              <span className="design-eyebrow">Small business owners</span>
              <h3 className="design-panel__title">You need a site that makes you look established</h3>
              <ul className="design-list">
                <li>You are relying on referrals, word of mouth, or an outdated site.</li>
                <li>You want trust, clarity, and a stronger first impression online.</li>
                <li>You need a simple path for people to contact you or request work.</li>
              </ul>
            </article>

            <article className="design-panel design-for__card">
              <span className="design-eyebrow">Growing teams</span>
              <h3 className="design-panel__title">You have processes that are starting to break</h3>
              <ul className="design-list">
                <li>You are juggling spreadsheets, forms, inboxes, and manual follow-up.</li>
                <li>You need automation, dashboards, or internal tools that reduce busywork.</li>
                <li>You want software that fits how your team actually operates.</li>
              </ul>
            </article>

            <article className="design-panel design-for__card">
              <span className="design-eyebrow">Founders and operators</span>
              <h3 className="design-panel__title">You need a builder who can handle ambiguity</h3>
              <ul className="design-list">
                <li>You have a product or platform idea that is more complex than a template site.</li>
                <li>You want someone who can think through UX, backend logic, and long-term maintainability.</li>
                <li>You care about shipping something useful, stable, and built around the business.</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="projects-section-header projects-section-header--banner">
          <div className="projects-title-banner" aria-hidden="true">
            <span className="projects-title-banner__stripe projects-title-banner__stripe--teal" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--orange" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--brown" />
          </div>
          <h2 className="projects-section-title projects-section-title--banner" id="design-packages-title">
            Design Packages
          </h2>
        </div>

        <div className="design-package-grid">
          {packageDetails.map((tier) => (
            <article key={tier.name} className="design-package-card">
              <div className="design-package-card__primary">
                <div className="design-package-card__header">
                  <div>
                    <p className="design-package-card__eyebrow">{tier.delivery}</p>
                    <h3 className="design-package-card__title">{tier.name}</h3>
                  </div>
                  <p className="design-package-card__price">{tier.price}</p>
                </div>

                <p className="design-package-card__summary">{tier.summary}</p>

                <ul className="design-package-card__scope">
                  {tier.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="design-package-card__summary">Best fit for</p>
                <ul className="design-package-card__scope">
                  {tier.bestFitFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="design-package-card__secondary">
                <div className="design-package-card__subscription">
                  <div className="design-package-card__subscription-header">
                    <span>Monthly support</span>
                    <strong>{tier.subscription}</strong>
                  </div>
                  <ul className="design-package-card__support-list">
                    {tier.supportIncludes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="design-testimonial-card">
                  <div className="design-testimonial-card__media">
                    <img
                      src={tier.testimonial.headshot}
                      alt={`${tier.testimonial.title} testimonial placeholder`}
                      className="design-testimonial-card__headshot"
                    />
                  </div>
                  <div className="design-testimonial-card__body">
                    <span className="design-testimonial-card__status">{tier.testimonial.status}</span>
                    <blockquote>{tier.testimonial.quote}</blockquote>
                    <div>
                      <p className="design-testimonial-card__name">{tier.testimonial.name}</p>
                      <p className="design-testimonial-card__title">{tier.testimonial.title}</p>
                    </div>
                    {tier.project?.link.type !== "private" && tier.project?.link.href ? (
                      <a
                        href={tier.project.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="design-testimonial-card__project-link"
                      >
                        View Project
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="design-section design-cta" aria-labelledby="design-cta-title">
        <div className="design-cta__panel">
          <div>
            <p className="design-cta__eyebrow">Need a fit check?</p>
            <h2 id="design-cta-title">If you already know the kind of project you need, I can help scope it quickly.</h2>
          </div>
          <div className="design-cta__actions">
            <a href="#contact" className="design-action-button">
              <img src="/mail.svg" alt="" className="navbar-icon" />
              <span>Contact Me</span>
            </a>
            <Link to="/projects" className="design-action-button design-action-button--secondary">
              <img src="/projects.svg" alt="" className="navbar-icon" />
              <span>See More Work</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
