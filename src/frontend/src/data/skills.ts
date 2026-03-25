export type SkillCategory = 'language' | 'framework' | 'other';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
};

export const skills: Skill[] = [
  // Programming Languages
  { id: 'python',     name: 'Python',      category: 'language' },
  { id: 'typescript', name: 'TypeScript',  category: 'language' },
  { id: 'javascript', name: 'JavaScript',  category: 'language' },
  { id: 'java',       name: 'Java',        category: 'language' },
  { id: 'sql',        name: 'SQL',         category: 'language' },
  { id: 'cpp',        name: 'C/C++',       category: 'language' },

  // Frameworks & Libraries
  { id: 'react',      name: 'React',       category: 'framework' },
  { id: 'fastapi',    name: 'FastAPI',     category: 'framework' },
  { id: 'nodejs',     name: 'Node.js',     category: 'framework' },
  { id: 'pandas',     name: 'Pandas',      category: 'framework' },
  { id: 'numpy',      name: 'NumPy',       category: 'framework' },
  { id: 'tailwind',   name: 'Tailwind',    category: 'framework' },

  // Other (tools, platforms, services)
  { id: 'gcs',        name: 'Google Cloud',  category: 'other' },
  { id: 'azure',      name: 'Azure',         category: 'other' },
  { id: 'github',     name: 'GitHub',        category: 'other' },
  { id: 'docker',     name: 'Docker',        category: 'other' },
  { id: 'postgres',   name: 'PostgreSQL',    category: 'other' },
  { id: 'figma',      name: 'Figma',         category: 'other' },
];

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language:  'Programming Languages',
  framework: 'Frameworks & Libraries',
  other:     'Tools & Platforms',
};
