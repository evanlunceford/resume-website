import { projects } from "../data/projects";
import { skills } from "../data/skills";
import "../css/pages/Projects.css";

const skillNameById = new Map(skills.map((skill) => [skill.id, skill.name]));

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="projects-content-container">
      <section className="projects-section" aria-labelledby="featured-projects-title">
        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card featured-project-card"
              style={{ '--card-hue': `${project.hue ?? 0}deg` } as React.CSSProperties}
            >
              {project.background && <project.background className="project-card-bg" />}
              <div 
                className="project-card-header"
                style={{ justifyContent: project.orientation}}
              >
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
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section" aria-labelledby="other-projects-title">
        <div className="projects-section-header">
          <h2 className="projects-section-title" id="other-projects-title">
            More Projects
          </h2>
          <p className="projects-section-copy">
            Additional builds, experiments, and smaller implementations.
          </p>
        </div>

        <div className="projects-grid">
          {otherProjects.map((project) => (
            <article key={project.id} className="project-card">
              {project.background && <project.background className="project-card-bg" />}
              <div className="project-card-header">
                <h3 className="project-card-title">{project.name}</h3>
              </div>

              <p className="project-card-description">{project.description}</p>

              <div className="project-skills" aria-label={`${project.name} skills`}>
                {project.skills.map((skillId) => (
                  <span key={skillId} className="project-skill-chip">
                    {skillNameById.get(skillId) ?? skillId}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
