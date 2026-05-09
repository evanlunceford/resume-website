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
  features: {
    icon: string;
    alt: string;
    label: string;
  }[];
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
      "Monthly performance updates and bug fixes.",
      "Anytime website content updates.",
    ],
    summary: "A polished, professional-grade website designed to brand your business confidently. Built for all media sizes including desktop, tablet, and mobile.",
    features: [
      {
        icon: "/design-package-icons/starter/webpages.svg",
        alt: "Stacked website pages icon",
        label: "Up to 5 unique pages",
      },
      {
        icon: "/design-package-icons/starter/seo.svg",
        alt: "Search icon for SEO basics",
        label: "SEO Optimization",
      },
      {
        icon: "/design-package-icons/starter/certificate.svg",
        alt: "Certificate icon for trust signals",
        label: "Your Branding, 100% Ownership",
      },
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
      "Additonal feature support and refinement.",
      "Database, auth, integration, and form-flow monitoring.",
      "Access to custom website analytics dashboard.",
    ],
    summary: "A custom platform branded exclusively for your business. Includes backend services such as authentication, admin dashboards, databases, and user flows.",
    features: [
      {
        icon: "/design-package-icons/dynamic/custom-ui/custom-ui.svg",
        alt: "Custom interface icon inside a browser window",
        label: "Custom UI For Your Brand",
      },
      {
        icon: "/design-package-icons/dynamic/database.svg",
        alt: "Database",
        label: "Database Integration",
      },
        {
          icon: "/design-package-icons/dynamic/api.svg",
          alt: "Network icon for API connections",
          label: "API Integrations",
        },
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
    subscription: "$500/month",
    supportIncludes: [
      "Same-day bug fixes and feature refinement.",
      "Monitoring, maintenance, and incident response for critical systems.",
      "Ongoing roadmap work, experiments, and feature delivery as needed.",
    ],
    summary: "Built for businesses that want proprietary software that requires deep research, heavy automation, big datasets, and custom API integrations.",
    features: [
      {
        icon: "/design-package-icons/custom/proprietary-technology.svg",
        alt: "Settings and code icon for custom systems",
        label: "Custom Systems",
      },
      {
        icon: "/design-package-icons/custom/automation.svg",
        alt: "Automation workflow icon",
        label: "Workflow Automation",
      },
      {
        icon: "/design-package-icons/custom/analytics.svg",
        alt: "Analytics icon",
        label: "Real-time analytic dashboards",
      },
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
  { id: "frontend",  category: "Modern UI Design",   description: "Frontend UIs built with React, TypeScript, CSS, and Vite.",          icons: ["react", "typescript", "css", "vite"] },
  { id: "backend",   category: "Custom Backends",   description: "Custom APIs, server logic, and containerized deployment.", icons: ["python", "server", "docker", "aws"] },
  { id: "data",      category: "Data & Analytics",  description: "Database design, SQL queries, and analytics reporting.",                  icons: ["database", "sql", "analytics"] },
  { id: "tooling",   category: "Tooling & Workflow", description: "Git-based workflows, extensive testing, all with a custom codebase.", icons: ["github", "vscode", "terminal"] },
];

export default function Design() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const scopeRef = useRef<HTMLElement>(null);
  const packageCardRefs = useRef<Array<HTMLElement | null>>([]);
  const [scopeVisible, setScopeVisible] = useState(false);
  const [activeScopeSlide, setActiveScopeSlide] = useState(0);
  const [iconsVisible, setIconsVisible] = useState(false);
  const [visiblePackageCards, setVisiblePackageCards] = useState<string[]>([]);

  useEffect(() => {
    const el = scopeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setScopeVisible(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!scopeVisible) return;
    const showTimer = setTimeout(() => setIconsVisible(true), 700);
    let interval: ReturnType<typeof setInterval>;
    const cycleTimer = setTimeout(() => {
      interval = setInterval(() => setActiveScopeSlide(i => (i + 1) % scopeSlides.length), 4500);
    }, 900);
    return () => { clearTimeout(showTimer); clearTimeout(cycleTimer); clearInterval(interval); };
  }, [scopeVisible]);

  useEffect(() => {
    const cards = packageCardRefs.current.filter((card): card is HTMLElement => Boolean(card));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const cardName = entry.target.getAttribute("data-package-name");
          if (!cardName) return;

          setVisiblePackageCards((current) =>
            current.includes(cardName) ? current : [...current, cardName]
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

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
            <p className="design-scope__lead">
              I build beautiful websites, but I also build the systems that can power your business. 
              Whether it’s automation workflows, custom applications, database integration, or internal software tools, I can do it.
            </p>
            <div className={`design-scope__ticker${iconsVisible ? " design-scope__ticker--visible" : ""}`} aria-live="polite">
              <div className="design-scope__ticker-window">
                <div key={activeScopeSlide} className="design-scope__ticker-item">
                  <span className="design-scope__ticker-category">{scopeSlides[activeScopeSlide].category}</span>
                  <span className="design-scope__ticker-desc">{scopeSlides[activeScopeSlide].description}</span>
                </div>
              </div>
              <div key={`progress-${activeScopeSlide}`} className="design-scope__ticker-progress" />
              <div className="design-scope__ticker-dots">
                {scopeSlides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`design-scope__ticker-dot${i === activeScopeSlide ? " design-scope__ticker-dot--active" : ""}`}
                    onClick={() => setActiveScopeSlide(i)}
                    aria-label={slide.category}
                  />
                ))}
              </div>
            </div>
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
              <text textAnchor="middle" fontSize="11" letterSpacing="3" fill="rgba(30,168,150,0.9)" fontFamily="Righteous, sans-serif" className="design-scope__svg-text" style={{ animationDelay: "0.35s" }}>
                <textPath href="#scope-large-text-path" startOffset="50%">MY SERVICE</textPath>
              </text>
              <text textAnchor="middle" fontSize="10" letterSpacing="2.5" fill="rgba(255,113,91,0.9)" fontFamily="Righteous, sans-serif" className="design-scope__svg-text" style={{ animationDelay: "0.45s" }}>
                <textPath href="#scope-small-text-path" startOffset="50%">WEB DESIGNER</textPath>
              </text>

              {/* WordPress — static, centered in the small orange circle */}
              <image className="design-scope__icon design-scope__icon--active" href="/diagram-icons/wordpress.svg" x="275" y="375" width="50" height="50" />

              {/* ── Icons scattered throughout the large circle interior ── */}
              {/* Sizes reflect importance; lower icons pushed to outer lobes away from orange circle */}

              {/* react      62×62 — upper left, most prominent */}
              <image className={iconCls("react")}      href="/diagram-icons/react.svg"      x="141" y="131" width="62" height="62" />
              {/* typescript 58×58 — upper right, equally prominent */}
              <image className={iconCls("typescript")} href="/diagram-icons/typescript.svg" x="409" y="129" width="58" height="58" />
              {/* python     52×52 — left side */}
              <image className={iconCls("python")}     href="/diagram-icons/python.svg"     x="86"  y="246" width="52" height="52" />
              {/* docker     50×50 — right side */}
              <image className={iconCls("docker")}     href="/diagram-icons/docker.svg"     x="447" y="237" width="50" height="50" />
              {/* server     42×42 — upper center-left */}
              <image className={iconCls("server")}     href="/diagram-icons/server.svg"     x="229" y="171" width="42" height="42" />
              {/* vite       42×42 — upper center-right */}
              <image className={iconCls("vite")}       href="/diagram-icons/vite.svg"       x="344" y="171" width="42" height="42" />
              {/* github     38×38 — top center */}
              <image className={iconCls("github")}     href="/diagram-icons/github.svg"     x="281" y="61"  width="38" height="38" />
              {/* database   42×42 — lower left lobe, pushed toward edge */}
              <image className={iconCls("database")}   href="/diagram-icons/database.svg"   x="137" y="369" width="42" height="42" />
              {/* analytics  34×34 — lower left lobe, further out */}
              <image className={iconCls("analytics")}  href="/diagram-icons/analytics.svg"  x="176" y="266" width="34" height="34" />
              {/* css        44×44 — lower right lobe, pushed toward edge */}
              <image className={iconCls("css")}        href="/diagram-icons/css.svg"        x="418" y="363" width="44" height="44" />
              {/* vscode     36×36 — lower right lobe, outer edge */}
              <image className={iconCls("vscode")}     href="/diagram-icons/vscode.svg"     x="447" y="302" width="36" height="36" />
              {/* sql        42×42 — lower right lobe, further out */}
              <image className={iconCls("sql")}        href="/diagram-icons/sql.svg"        x="336" y="246" width="42" height="42" />
              {/* aws        38×38 — right side, between docker and vite */}
              <image className={iconCls("aws")}        href="/diagram-icons/aws.svg"        x="200" y="70" width="38" height="38" />
              {/* terminal   34×34 — upper area, left of github */}
              <image className={iconCls("terminal")}   href="/diagram-icons/terminal.svg"   x="365" y="80"  width="34" height="34" />
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
          {packageDetails.map((tier, index) => (
            <article
              key={tier.name}
              ref={(node) => {
                packageCardRefs.current[index] = node;
              }}
              data-package-name={tier.name}
              className={`design-package-card${visiblePackageCards.includes(tier.name) ? " design-package-card--visible" : ""}`}
            >
              <div className="design-package-card__primary">
                <div className="design-package-card__header">
                  <div>
                    <p className="design-package-card__eyebrow">{tier.delivery}</p>
                    <h3 className="design-package-card__title">{tier.name}</h3>
                  </div>
                  <p className="design-package-card__price">{tier.price}</p>
                </div>

                <p className="design-package-card__summary">{tier.summary}</p>

                <div className="design-package-card__features" aria-label={`${tier.name} feature highlights`}>
                  {tier.features.map((feature) => (
                    <div key={feature.label} className="design-package-card__feature">
                      <img
                        src={feature.icon}
                        alt={feature.alt}
                        className="design-package-card__feature-icon"
                      />
                      <p className="design-package-card__feature-label">{feature.label}</p>
                    </div>
                  ))}
                </div>

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
                      <div className="design-testimonial-card__meta">
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
            <p className="design-cta__eyebrow">Ready To Get Started?</p>
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
