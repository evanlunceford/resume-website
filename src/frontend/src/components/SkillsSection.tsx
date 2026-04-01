import { useMemo } from 'react';
import { skills, CATEGORY_LABELS, type SkillCategory } from '../data/skills';
import { projects } from '../data/projects';
import '../css/components/SkillsSection.css';

const CATEGORY_ORDER: SkillCategory[] = ['language', 'framework', 'other'];

const CATEGORY_COLORS: Record<SkillCategory, string> = {
  language: 'var(--teal)',
  framework: 'var(--orange)',
  other: 'var(--dark-teal)',
};

export default function SkillsSection() {
  // Count how many projects each skill appears in.
  const projectCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of projects) {
      for (const skillId of project.skills) {
        counts.set(skillId, (counts.get(skillId) ?? 0) + 1);
      }
    }
    return counts;
  }, []);

  // Group and sort skills by category, then by project count descending.
  const grouped = useMemo(() => {
    return CATEGORY_ORDER.map((category) => {
      const categorySkills = skills
        .filter((skill) => skill.category === category)
        .map((skill) => ({ ...skill, count: projectCounts.get(skill.id) ?? 0 }))
        .sort((a, b) => b.count - a.count);
      return { category, skills: categorySkills };
    });
  }, [projectCounts]);

  return (
    <section className="skills-section">
      <div className="skills-panel">

        <div className="skills-grid">
          {grouped.map(({ category, skills: catSkills }) => (
            <div
              key={category}
              className="skills-column"
              style={{ '--cc': CATEGORY_COLORS[category] } as React.CSSProperties}
            >
              <div className="skills-column-header">
                <div className="skills-column-accent" />
                <h3 className="skills-column-title">{CATEGORY_LABELS[category]}</h3>
              </div>

              <ul className="skills-list">
                {catSkills.map((skill, i) => (
                  <li
                    key={skill.id}
                    className="skill-card"
                    style={{
                      '--cc': CATEGORY_COLORS[category],
                      animationDelay: `${i * 0.07}s`,
                    } as React.CSSProperties}
                  >
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-count">
                      {skill.count === 0
                        ? 'in progress'
                        : skill.count === 1
                          ? '1 project'
                          : `${skill.count} projects`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
