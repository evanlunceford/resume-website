import { useEffect, useMemo, useState } from "react";
import { CATEGORY_LABELS, skills, type SkillCategory } from "../../data/skills";
import type { Project } from "../../data/projects";
import ProjectMiniTimeline from "./ProjectMiniTimeline";
import "../../css/components/ProjectModal.css";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
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
            {project.link ? (
              <a className="project-modal-link" target="_blank" href={project.link}>
                Visit Project
              </a>
            ) : (
              <span className="project-modal-link project-modal-link--disabled">Private Project</span>
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
                    <span className="project-modal-photo-placeholder-title">{activeScreenshot?.title ?? "Screenshot"}</span>
                    <span className="project-modal-photo-placeholder-caption">{activeScreenshot?.caption ?? ""}</span>
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
            <h3>Tech Stack</h3>
          </div>

          <div className="project-modal-skills-grid">
            {groupedSkills.map((group) => (
              <div key={group.category} className="project-modal-skills-column">
                <div className="project-modal-skills-column-header">
                  <div className="project-modal-skills-column-accent" />
                  <h4 className="project-modal-skills-column-title">{CATEGORY_LABELS[group.category]}</h4>
                </div>

                <ul className="project-modal-skills-list">
                  {group.skills.map((skill) => (
                    <li key={skill.id} className="project-modal-skill-card">
                      <span className="project-modal-skill-name">{skill.name}</span>
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
              x
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
