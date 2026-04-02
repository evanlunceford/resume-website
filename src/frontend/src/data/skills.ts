export type SkillCategory = 'language' | 'framework' | 'other';
export type TechStackCategory =
  | 'frontend'
  | 'backend'
  | 'data'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'tooling'
  | 'markup';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  stackCategory: TechStackCategory;
};

export const skills: Skill[] = [
  // Languages
  { id: 'python',     name: 'Python',      category: 'language', stackCategory: 'backend' },
  { id: 'typescript', name: 'TypeScript',  category: 'language', stackCategory: 'frontend' },
  { id: 'javascript', name: 'JavaScript',  category: 'language', stackCategory: 'frontend' },
  { id: 'java',       name: 'Java',        category: 'language', stackCategory: 'backend' },
  { id: 'sql',        name: 'SQL',         category: 'language', stackCategory: 'database' },
  { id: 'cpp',        name: 'C/C++',       category: 'language', stackCategory: 'backend' },
  { id: 'css', name: 'CSS',  category: 'language', stackCategory: 'frontend' },

  // Frameworks & Libraries
  { id: 'react',      name: 'React',       category: 'framework', stackCategory: 'frontend' },
  { id: 'fastapi',    name: 'FastAPI',     category: 'framework', stackCategory: 'backend' },
  { id: 'nodejs',     name: 'Node.js',     category: 'framework', stackCategory: 'backend' },
  { id: 'express',     name: 'Express',     category: 'framework', stackCategory: 'backend' },
  { id: 'spring-boot',     name: 'Spring Boot',     category: 'framework', stackCategory: 'backend' },

  // Other (tools, platforms, services)
  { id: 'gcs',        name: 'Google Cloud',  category: 'other', stackCategory: 'cloud' },
  { id: 'github',     name: 'GitHub',        category: 'other', stackCategory: 'tooling' },
  { id: 'docker',     name: 'Docker',        category: 'other', stackCategory: 'devops' },
  { id: 'postgres',   name: 'PostgreSQL',    category: 'other', stackCategory: 'database' },
  { id: 'firebase',   name: 'Firebase',    category: 'other', stackCategory: 'database' },
  { id: 'qdrant',   name: 'Qdrant',    category: 'other', stackCategory: 'database' },

];

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language:  'Languages',
  framework: 'Frameworks & Libraries',
  other:     'Tools & Platforms',
};

export const STACK_CATEGORY_LABELS: Record<TechStackCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  data: 'Data',
  database: 'Database',
  cloud: 'Cloud',
  devops: 'DevOps',
  tooling: 'Tooling',
  markup: 'Markup',
};
