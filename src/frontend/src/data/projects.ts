export type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];  // skill IDs from skills.ts
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'SCOUT Workforce',
    description: 'Internal workforce management platform co-founded at NAU Venture Studio.',
    skills: ['python', 'fastapi', 'react', 'typescript', 'postgres', 'gcs', 'docker', 'github'],
  },
  {
    id: 2,
    name: 'Ad Strategies Dashboard',
    description: 'Internal data analytics dashboard for marketing performance tracking.',
    skills: ['python', 'pandas', 'numpy', 'sql', 'postgres', 'github'],
  },
  {
    id: 3,
    name: 'Resume Website',
    description: 'Personal portfolio and resume site built with React and TypeScript.',
    skills: ['typescript', 'react', 'github'],
  },
  {
    id: 4,
    name: 'Project Placeholder A',
    description: 'Add your project description here.',
    skills: ['java', 'sql', 'github'],
  },
  {
    id: 5,
    name: 'Project Placeholder B',
    description: 'Add your project description here.',
    skills: ['python', 'fastapi', 'docker', 'azure'],
  },
];
