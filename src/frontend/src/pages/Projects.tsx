import { useEffect, useState } from "react";
import ProjectModal from "../components/projects/ProjectModal";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import "../css/pages/Projects.css";

const skillNameById = new Map(skills.map((skill) => [skill.id, skill.name]));
const featuredProjectSlotClasses = [
  "featured-project-card--primary",
  "featured-project-card--wide",
  "featured-project-card--compact",
  "featured-project-card--compact",
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProjectId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <div className="projects-content-container">
          <div className="projects-section-header projects-section-header--banner">
            <div className="projects-title-banner" aria-hidden="true">
              <span className="projects-title-banner__stripe projects-title-banner__stripe--teal" />
              <span className="projects-title-banner__stripe projects-title-banner__stripe--orange" />
              <span className="projects-title-banner__stripe projects-title-banner__stripe--brown" />
            </div>
            <h2 className="projects-section-title projects-section-title--banner" id="featured-projects-title">
              Featured Projects
            </h2>
          </div>
        <section className="featured-projects-section" aria-labelledby="featured-projects-title">

          <div className="featured-projects-grid">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={`project-card project-card-button featured-project-card ${featuredProjectSlotClasses[index] ?? "featured-project-card--compact"}`}
                style={{ '--card-hue': `${project.hue ?? 0}deg` } as React.CSSProperties}
                onClick={() => setSelectedProjectId(project.id)}
              >
                {project.background && <project.background className="project-card-bg" />}
                <div className="project-card-header">
                  {project.logo && (
                    <img
                      className="project-card-logo"
                      src={project.logo}
                      alt={project.logo}
                    />
                  )}
                  {!project.logoOnly && (
                    <h3
                      className="project-card-title"
                      style={{
                        fontFamily: project.font,
                        fontWeight: project.fontWeight,
                      }}
                    >
                      {project.name}
                    </h3>
                  )}
                </div>
              </button>
            ))}
          </div>
          <div className="projects-title-banner projects-title-banner--divider" aria-hidden="true">
            <span className="projects-title-banner__stripe projects-title-banner__stripe--teal" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--orange" />
            <span className="projects-title-banner__stripe projects-title-banner__stripe--brown" />
          </div>
        </section>

        <section className="projects-section" aria-labelledby="other-projects-title">
          <div className="projects-section-header">
            <h2 className="projects-section-title" id="other-projects-title">
              More Projects
            </h2>
          </div>

          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className="project-card project-card-button project-card-button--standard"
                onClick={() => setSelectedProjectId(project.id)}
              >
                <div className="project-listing-index" aria-hidden="true">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="project-listing-content">
                  {project.background && <project.background className="project-card-bg" />}
                  <div className="project-card-header project-card-header--listing">
                    <div className="project-listing-heading">
                      <span className="project-listing-label">Archive Entry</span>
                      <h3 className="project-card-title">{project.name}</h3>
                    </div>
                    <div className="project-listing-meta">
                      <span>{project.startDate}</span>
                      <span>{project.estimatedLinesOfCode.toLocaleString()} LOC</span>
                    </div>
                  </div>

                  <p className="project-card-description">{project.description}</p>

                  <div className="project-skills" aria-label={`${project.name} skills`}>
                    {project.skills.map((skillId) => (
                      <span key={skillId} className="project-skill-chip">
                        {skillNameById.get(skillId) ?? skillId}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />}
    </>
  );
}
