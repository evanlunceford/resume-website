import React from "react";
import ScoutBackground from "../components/projects/ScoutBackground";

export type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];
  featured: boolean;
  background?: React.ComponentType<{ className?: string }>;
  font?: string;
  fontWeight?: string;
  logo?: string;
  logoOnly: boolean;
  hue?: number;

  // Defines where to align the title and logo
  orientation?: "start" | "end";
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'SCOUT',
    description: 'Internal workforce management platform co-founded at NAU Venture Studio.',
    skills: ['python', 'fastapi', 'react', 'typescript', 'postgres', 'gcs', 'docker', 'github'],
    featured: true,
    background: ScoutBackground,
    font: "'Inter', sans-serif",
    fontWeight: "600",
    logo: "/scout-horizontal.png",
    logoOnly: true,

    orientation: "start",
    hue: 150,
  },
  {
    id: 2,
    name: 'Ad Strategies Dashboard',
    description: 'Internal data analytics dashboard for marketing performance tracking.',
    skills: ['python', 'pandas', 'numpy', 'sql', 'postgres', 'github'],
    featured: true,
    logoOnly: false
  },
  {
    id: 3,
    name: 'Resume Website',
    description: 'Personal portfolio and resume site built with React and TypeScript.',
    skills: ['typescript', 'react', 'github'],
    featured: true,
    logoOnly: false,
  },
  {
    id: 4,
    name: 'Project Placeholder A',
    description: 'Add your project description here.',
    skills: ['java', 'sql', 'github'],
    featured: false,
    logoOnly: false,
  },
  {
    id: 5,
    name: 'Project Placeholder B',
    description: 'Add your project description here.',
    skills: ['python', 'fastapi', 'docker', 'azure'],
    featured: false,
    logoOnly: false,
  },
];
