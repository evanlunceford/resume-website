import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { CATEGORY_LABELS, skills, type SkillCategory } from "../../data/skills";
import type { Project } from "../../data/projects";
import ProjectMiniTimeline from "./ProjectMiniTimeline";
import "../../css/components/ProjectModal.css";
import "../../css/components/SkillsSection.css";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const CATEGORY_COLORS: Record<SkillCategory, string> = {
  language: "var(--teal)",
  framework: "var(--orange)",
  other: "var(--dark-teal)",
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setCurrentScreenshot(0);
  }, [project.id]);

  const groupedSkills = useMemo(() => {
    const order: SkillCategory[] = ["language", "framework", "other"];
    return order
      .map((category) => ({
        category,
        skills: project.skills
          .map((skillId) => skills.find((skill) => skill.id === skillId))
          .filter((skill): skill is NonNullable<typeof skill> => Boolean(skill)),
      }))
      .map((group) => ({
        ...group,
        skills: group.skills.filter((skill) => skill.category === group.category),
      }))
      .filter((group) => group.skills.length > 0);
  }, [project.skills]);

  const activeScreenshot = project.screenshots[currentScreenshot];
  const canMove = project.screenshots.length > 1;
  const projectLinkMeta =
    project.link.type === "public"
      ? { href: project.link.href, icon: "/redirect.svg", alt: "Website Icon", label: "Visit Project" }
      : project.link.type === "open-source"
        ? { href: project.link.href, icon: "/github.svg", alt: "GitHub Icon", label: "Visit Github" }
        : null;

  const goPrevious = () => {
    setCurrentScreenshot((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentScreenshot((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="presentation">
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-modal-header">
          <div className="project-modal-header-left">
            <h2 className="project-modal-title" id={`project-modal-title-${project.id}`}>
              {project.name}
            </h2>
            <p className="project-modal-description">{project.shortDescription}</p>
          </div>

          <div className="project-modal-header-center">
            {projectLinkMeta ? (
              <a className="project-modal-link" target="_blank" rel="noreferrer" href={projectLinkMeta.href}>
                <img src={projectLinkMeta.icon} alt={projectLinkMeta.alt} />
                <span>{projectLinkMeta.label}</span>
              </a>
            ) : (
              <span className="project-modal-link project-modal-link--disabled">
                <img src="/lock.svg" alt="Lock Icon" />
                <span>Private Project</span>
              </span>
            )}
          </div>

          <div className="project-modal-header-right">
            <button className="project-modal-close" type="button" aria-label="Close project modal" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <div className="project-modal-main">
          <div className="project-modal-main-features">
            <div className="project-modal-section-header">
              <h3>Features</h3>
            </div>

            <ul className="project-modal-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="project-modal-meta-row">
              <div className="project-modal-meta-card">
                <span className="project-modal-meta-label">Estimated Lines of Code</span>
                <strong className="project-modal-meta-value">{project.estimatedLinesOfCode.toLocaleString()}</strong>
              </div>
              <div className="project-modal-meta-card">
                <span className="project-modal-meta-label">Timeline</span>
                <ProjectMiniTimeline
                  startDate={project.startDate}
                  endDate={project.endDate}
                  className="project-modal-mini-timeline"
                />
              </div>
            </div>
          </div>
          <div className="project-modal-main-photos">
            <div className="project-modal-section-header">
              <h3>Screenshots</h3>
              <span className="project-modal-photo-count">
                {String(currentScreenshot + 1).padStart(2, "0")} / {String(project.screenshots.length).padStart(2, "0")}
              </span>
            </div>

            <div className="project-modal-photo-widget">
              <button
                type="button"
                className="project-modal-photo-arrow"
                onClick={goPrevious}
                disabled={!canMove}
                aria-label="Previous screenshot"
              >
                &lt;
              </button>

              <div className="project-modal-photo-stage">
                {activeScreenshot?.filename ? (
                  <img
                    src={`${project.screenshotDirectory}/${activeScreenshot.filename}`}
                    alt={activeScreenshot.title}
                    className="project-modal-photo-image project-modal-photo-image--clickable"
                    onClick={() => setLightboxOpen(true)}
                  />
                ) : (
                  <div className="project-modal-photo-placeholder">
                    <span className="project-modal-photo-placeholder-title">Screenshot Coming Soon</span>
                    <span className="project-modal-photo-placeholder-caption">
                      {activeScreenshot?.caption ?? "This project does not have a public screenshot yet."}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="project-modal-photo-arrow"
                onClick={goNext}
                disabled={!canMove}
                aria-label="Next screenshot"
              >
                &gt;
              </button>
            </div>

            <div className="project-modal-photo-caption">
              <strong>{activeScreenshot?.title}</strong>
              <p>{activeScreenshot?.caption}</p>
            </div>
          </div>
        </div>

        <div className="project-modal-skills">
          <div className="project-modal-section-header">
            <div className="project-modal-skills-title-wrapper">
              <h3 className="project-modal-skills-heading">Tech Stack</h3>
            </div>
          </div>

          <div className="project-modal-skills-grid skills-grid">
            {groupedSkills.map((group) => (
              <div
                key={group.category}
                className="project-modal-skills-column skills-column"
                style={{ "--cc": CATEGORY_COLORS[group.category] } as CSSProperties}
              >
                <div className="project-modal-skills-column-header skills-column-header">
                  <div className="project-modal-skills-column-accent skills-column-accent" />
                  <h4 className="project-modal-skills-column-title skills-column-title">{CATEGORY_LABELS[group.category]}</h4>
                </div>

                <ul className="project-modal-skills-list skills-list">
                  {group.skills.map((skill, index) => (
                    <li
                      key={skill.id}
                      className="project-modal-skill-card skill-card"
                      style={{ "--cc": CATEGORY_COLORS[group.category], animationDelay: `${index * 0.07}s` } as CSSProperties}
                    >
                      <span className="project-modal-skill-name skill-name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox-backdrop" onClick={() => setLightboxOpen(false)} role="presentation">
          <div className="lightbox" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Close lightbox">
              <img src="/close.svg" alt="Close Screenshot View" />
            </button>

            <button
              className="lightbox-arrow"
              type="button"
              onClick={goPrevious}
              disabled={!canMove}
              aria-label="Previous screenshot"
            >
              &lt;
            </button>

            <div className="lightbox-image-wrap">
              <img
                src={`${project.screenshotDirectory}/${activeScreenshot?.filename}`}
                alt={activeScreenshot?.title}
                className="lightbox-image"
              />
            </div>

            <button
              className="lightbox-arrow"
              type="button"
              onClick={goNext}
              disabled={!canMove}
              aria-label="Next screenshot"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
