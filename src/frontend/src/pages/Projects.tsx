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
            <article
              key={project.id}
              className="project-card featured-project-card"
            >
              <div className="project-card-header">
                <h3 className="project-card-title">{project.name}</h3>
                <span className="project-card-badge">Featured</span>
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
