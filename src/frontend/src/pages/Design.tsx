import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CrtHeadshot from "../components/CrtHeadshot";
import DesignInquiryModal from "../components/design/DesignInquiryModal";
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
    exampleProjectName: "SW Bookkeeping",
    testimonial: {
      name: "Steven Faria",
      title: "Owner, SW Bookkeeping",
      quote: "\"My site looks 100x better on mobile than before, and generally looks way better than I managed on my own. It's designed much more intuitively for the end user, and I'm excited to put a QR for the new site on my new cards.\"",
      headshot: "/steven-headshot.jpg",
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
    exampleProjectName: "LeaseLift",
    testimonial: {
      name: "Jacob Wyatt",
      title: "Founder, LeaseLift",
      quote: "\"Our original platform was expensive to run and lacked key functionality, but after working with Evan, we now operate a cost efficient site with the features necessary for our business.\"",
      headshot: "/jacob-headshot.png",
      status: "Awaiting approved testimonial",
    },
  },
  {
    name: "Custom Software",
    price: "Starting at $15,000",
    delivery: "",
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
    exampleProjectName: "SCOUT",
    testimonial: {
      name: "Brandon Clarke",
      title: "Entrepreneur, Startup AZ",
      quote: "\"Evan has a unique ability to see the product holistically and build towards a solution that creates real value.\"",
      headshot: "/brandon-headshot.jpg",
      status: "Awaiting approved testimonial",
    },
  },
];

const scopeSlides = [
  { id: "frontend",  category: "Modern Frontend",   description: "Component-driven UIs built with React, TypeScript, CSS, and Vite.",          icons: ["react", "typescript", "css", "vite"] },
  { id: "backend",   category: "Custom Backends",   description: "Purpose-built APIs, server logic, and containerized deployment with Docker.", icons: ["python", "server", "docker"] },
  { id: "data",      category: "Data & Analytics",  description: "Database design, SQL queries, and analytics reporting.",                  icons: ["database", "sql", "analytics"] },
  { id: "tooling",   category: "Tooling & Workflow", description: "Git-based workflows, VS Code extensibility, and WordPress CMS integration.", icons: ["github", "vscode"] },
];

export default function Design() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const scopeRef = useRef<HTMLElement>(null);
  const [scopeVisible, setScopeVisible] = useState(false);
  const [activeScopeSlide, setActiveScopeSlide] = useState(0);
  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    const el = scopeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setScopeVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!scopeVisible) return;
    const showTimer = setTimeout(() => setIconsVisible(true), 1800);
    let interval: ReturnType<typeof setInterval>;
    const cycleTimer = setTimeout(() => {
      interval = setInterval(() => setActiveScopeSlide(i => (i + 1) % scopeSlides.length), 3000);
    }, 2500);
    return () => { clearTimeout(showTimer); clearTimeout(cycleTimer); clearInterval(interval); };
  }, [scopeVisible]);

  const iconCls = (id: string) =>
    `design-scope__icon${iconsVisible ? (scopeSlides[activeScopeSlide].icons.includes(id) ? " design-scope__icon--active" : " design-scope__icon--dim") : ""}`;

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
              <h1 className="design-title">Software that solves business problems.</h1>
              <div className="design-title-divider" aria-hidden="true">
                <span className="design-title-divider__line design-title-divider__line--teal" />
                <span className="design-title-divider__line design-title-divider__line--orange" />
                <span className="design-title-divider__line design-title-divider__line--brown" />
              </div>
              <p className="design-lead">
                I build websites and software tailored to your business, designed to solve complicated problems, and built to stay maintainable after launch.              
              </p>

              <div className="design-hero__actions">
                <a href="#design-packages" className="design-action-button">
                  <img src="/projects.svg" alt="" className="navbar-icon" />
                  <span>View Packages</span>
                </a>
                <button
                  type="button"
                  className="design-action-button design-action-button--secondary"
                  onClick={() => setIsInquiryModalOpen(true)}
                >
                  <img src="/mail.svg" alt="" className="navbar-icon" />
                  <span>Start Your Project</span>
                </button>
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

      <section ref={scopeRef} className={`design-section design-scope${scopeVisible ? " design-scope--visible" : ""}`} aria-labelledby="design-scope-title">
        <div className="projects-section-header projects-section-header--banner">
          <div className="projects-title-banner" aria-hidden="true">
            <span className="projects-title-banner__stripe projects-title-banner__stripe--teal" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--orange" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--brown" />
          </div>
          <h2 className="projects-section-title projects-section-title--banner" id="design-scope-title">
            Why me?
          </h2>
        </div>

        <div className="design-scope__layout">
          <div className="design-scope__copy">
            <h3 className="design-scope__heading">
              I Cover It All.
            </h3>
            <div className="design-title-divider" aria-hidden="true">
              <span className="design-title-divider__line design-title-divider__line--teal" />
              <span className="design-title-divider__line design-title-divider__line--orange" />
              <span className="design-title-divider__line design-title-divider__line--brown" />
            </div>
            <ul className="design-scope__slides">
              {scopeSlides.map((slide, i) => (
                <li
                  key={slide.id}
                  className={`design-scope__slide${i === activeScopeSlide && iconsVisible ? " design-scope__slide--active" : ""}`}
                  onClick={() => setActiveScopeSlide(i)}
                >
                  <div className="design-scope__slide-marker" />
                  <div className="design-scope__slide-body">
                    <p className="design-scope__slide-title">{slide.category}</p>
                    <p className="design-scope__slide-desc">{slide.description}</p>
                    {i === activeScopeSlide && iconsVisible && (
                      <div key={activeScopeSlide} className="design-scope__slide-progress" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="design-scope__diagram" aria-hidden="true">
            <svg viewBox="0 0 600 520" xmlns="http://www.w3.org/2000/svg" className="design-scope__circles-svg">
              <defs>
                {/* r=230 (10px inside the large stroke) — midpoint sits at y=30 */}
                <path id="scope-large-text-path" d="M 116 122 A 222 222 0 0 1 484 122" />
                {/* r=90 (10px inside the small stroke) — midpoint sits at y=310 */}
                <path id="scope-small-text-path" d="M 213 377 A 88 88 0 0 1 387 377" />
              </defs>

              {/* Full circle fills — complete backgrounds */}
              <circle cx="300" cy="260" r="240" fill="rgba(30,168,150,0.07)" />
              <circle cx="300" cy="400" r="100" fill="rgba(255,113,91,0.11)" />

              {/* Open arc outlines — gap at top for the label, animated draw-in */}
              <path d="M 360 28 A 240 240 0 1 1 240 28" fill="none" stroke="rgba(30,168,150,1)" strokeWidth="3.5" className="design-scope__circle design-scope__circle--large" pathLength="1000" />
              <path d="M 358 319 A 100 100 0 1 1 242 319" fill="none" stroke="rgba(255,113,91,1)" strokeWidth="3.5" className="design-scope__circle design-scope__circle--small" pathLength="1000" />

              {/* Labels curve along each circle's arc, centered in the gap */}
              <text textAnchor="middle" fontSize="11" letterSpacing="3" fill="rgba(30,168,150,0.9)" fontFamily="Righteous, sans-serif" className="design-scope__svg-text" style={{ animationDelay: "1.6s" }}>
                <textPath href="#scope-large-text-path" startOffset="50%">MY SERVICE</textPath>
              </text>
              <text textAnchor="middle" fontSize="10" letterSpacing="2.5" fill="rgba(255,113,91,0.9)" fontFamily="Righteous, sans-serif" className="design-scope__svg-text" style={{ animationDelay: "1.8s" }}>
                <textPath href="#scope-small-text-path" startOffset="50%">WEB DESIGNER</textPath>
              </text>

              {/* WordPress — static, centered in the small orange circle */}
              <image className="design-scope__icon design-scope__icon--static" href="/diagram-icons/wordpress.svg" x="280" y="380" width="40" height="40" />

              {/* ── Icons scattered throughout the large circle interior ── */}
              {/* Sizes reflect importance; lower icons pushed to outer lobes away from orange circle */}

              {/* react      50×50 — upper left, most prominent */}
              <image className={iconCls("react")}      href="/diagram-icons/react.svg"      x="147" y="137" width="50" height="50" />
              {/* typescript 46×46 — upper right, equally prominent */}
              <image className={iconCls("typescript")} href="/diagram-icons/typescript.svg" x="415" y="135" width="46" height="46" />
              {/* python     42×42 — left side */}
              <image className={iconCls("python")}     href="/diagram-icons/python.svg"     x="91"  y="251" width="42" height="42" />
              {/* docker     40×40 — right side */}
              <image className={iconCls("docker")}     href="/diagram-icons/docker.svg"     x="452" y="242" width="40" height="40" />
              {/* server     34×34 — upper center-left */}
              <image className={iconCls("server")}     href="/diagram-icons/server.svg"     x="233" y="175" width="34" height="34" />
              {/* vite       34×34 — upper center-right */}
              <image className={iconCls("vite")}       href="/diagram-icons/vite.svg"       x="348" y="175" width="34" height="34" />
              {/* github     30×30 — top center */}
              <image className={iconCls("github")}     href="/diagram-icons/github.svg"     x="285" y="65"  width="30" height="30" />
              {/* database   34×34 — lower left lobe, pushed toward edge */}
              <image className={iconCls("database")}   href="/diagram-icons/database.svg"   x="141" y="373" width="34" height="34" />
              {/* analytics  26×26 — lower left lobe, further out */}
              <image className={iconCls("analytics")}  href="/diagram-icons/analytics.svg"  x="180" y="270" width="26" height="26" />
              {/* css        36×36 — lower right lobe, pushed toward edge */}
              <image className={iconCls("css")}        href="/diagram-icons/css.svg"        x="422" y="367" width="36" height="36" />
              {/* vscode     28×28 — lower right lobe, outer edge */}
              <image className={iconCls("vscode")}     href="/diagram-icons/vscode.svg"     x="451" y="306" width="28" height="28" />
              {/* sql        34×34 — lower right lobe, further out */}
              <image className={iconCls("sql")}        href="/diagram-icons/sql.svg"        x="340" y="250" width="34" height="34" />
            </svg>
          </div>
        </div>
      </section>

      <section className="design-section" id="design-packages" aria-labelledby="design-packages-title">
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
                    <blockquote>{tier.testimonial.quote}</blockquote>
                    <div className="design-testimonial-card__footer">
                      <div className="design-testimonial-card__footer-text">
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="design-section design-cta" aria-labelledby="design-cta-title">
        <div className="design-cta__panel">
          <div>
            <p className="design-cta__eyebrow">Already know what you want?</p>
            <h2 id="design-cta-title">Send a quick message and I'll help you scope the right next step.</h2>
          </div>
          <div className="design-cta__actions">
            <button type="button" className="design-action-button" onClick={() => setIsInquiryModalOpen(true)}>
              <img src="/mail.svg" alt="" className="navbar-icon" />
              <span>Start Your Project</span>
            </button>
            <Link to="/projects" className="design-action-button design-action-button--secondary">
              <img src="/projects.svg" alt="" className="navbar-icon" />
              <span>See More Work</span>
            </Link>
          </div>
        </div>
      </section>

      <DesignInquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
    </main>
  );
}
