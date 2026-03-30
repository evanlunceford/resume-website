import React from "react";
import AdStrategiesBackground from "../components/projects/AdStrategiesBackground";
import LeaseLiftBackground from "../components/projects/LeaseLiftBackground";
import MrCassetteBackground from "../components/projects/MrCassetteBackground";
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
  shortDescription: string;
  screenshotDirectory: string;
  screenshots: { title: string; caption: string; image?: string }[];
  link?: string;
  features: string[];
  estimatedLinesOfCode: number;
  startDate: string;
  endDate: string | "Present";
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
    hue: 150,
    shortDescription: "An internal workforce management platform for staffing, scheduling, and operational visibility.",
    screenshotDirectory: "/images/projects/scout",
    screenshots: [
      { title: "Ops Dashboard", caption: "Snapshot placeholder for scheduling and staffing overview." },
      { title: "Team Allocation", caption: "Placeholder for role assignment and headcount planning." },
      { title: "Reporting View", caption: "Placeholder for internal metrics and workforce reporting." },
    ],
    link: "https://scoutworkforce.com",
    features: [
      "Role-based internal workflow management for operations teams",
      "Scheduling and allocation views for active workforce planning",
      "Centralized reporting for internal staffing and utilization metrics",
    ],
    estimatedLinesOfCode: 28000,
    startDate: "2024-08",
    endDate: "Present",
  },
  {
    id: 2,
    name: 'LeaseLift',
    description: 'Internal data analytics dashboard for marketing performance tracking.',
    skills: ['python', 'pandas', 'numpy', 'sql', 'postgres', 'github'],
    featured: true,
    background: LeaseLiftBackground,
    logoOnly: false,
    shortDescription: "A portfolio intelligence dashboard for property and leasing analytics.",
    screenshotDirectory: "/images/projects/lease-lift",
    screenshots: [
      { title: "Portfolio Overview", caption: "Placeholder for occupancy and leasing velocity summary." },
      { title: "Unit Insights", caption: "Placeholder for unit-level performance and trend view." },
      { title: "Executive Snapshot", caption: "Placeholder for KPIs used in weekly reporting." },
    ],
    features: [
      "Leasing performance dashboard tailored to portfolio operations",
      "KPI rollups for occupancy, pricing, and unit-level movement",
      "Analytical workflows designed for quick executive readouts",
    ],
    estimatedLinesOfCode: 14500,
    startDate: "2024-11",
    endDate: "2025-03",
  },
  {
    id: 3,
    name: 'Ad Strategies Dashboard',
    description: 'Internal data analytics dashboard for marketing performance tracking.',
    skills: ['python', 'pandas', 'numpy', 'sql', 'postgres', 'github'],
    featured: true,
    background: AdStrategiesBackground,
    logoOnly: false,
    shortDescription: "An enterprise analytics dashboard for campaign performance, pacing, and marketing health.",
    screenshotDirectory: "/images/projects/ad-strategies",
    screenshots: [
      { title: "Campaign Overview", caption: "Placeholder for top-line spend, conversions, and efficiency." },
      { title: "Performance Trends", caption: "Placeholder for time-series graphing across channels." },
      { title: "KPI Breakdown", caption: "Placeholder for drill-down metrics and comparisons." },
    ],
    features: [
      "Executive-facing views for campaign pacing and performance health",
      "Multi-metric comparisons for spend, conversions, and efficiency",
      "Flexible reporting layout for fast stakeholder reviews",
    ],
    estimatedLinesOfCode: 11200,
    startDate: "2024-06",
    endDate: "2024-10",
  },
  {
    id: 4,
    name: 'Mr. Cassette',
    description: 'Analyzes frequencies to determine musical context like chords, key, and rhythm.',
    skills: ['typescript', 'react', 'github'],
    featured: true,
    background: MrCassetteBackground,
    logoOnly: false,
    shortDescription: "A music-analysis project exploring visual identity and audio-derived insight.",
    screenshotDirectory: "/images/projects/mr-cassette",
    screenshots: [
      { title: "Cassette Player UI", caption: "Placeholder for the main interactive cassette experience." },
      { title: "Audio Breakdown", caption: "Placeholder for chord, key, and rhythm output." },
      { title: "Playback State", caption: "Placeholder for an in-session analysis view." },
    ],
    features: [
      "Cassette-inspired interface for audio exploration and interaction",
      "Music analysis concepts focused on chords, key, and rhythmic structure",
      "Strong visual identity built around tactile retro UI patterns",
    ],
    estimatedLinesOfCode: 8700,
    startDate: "2025-01",
    endDate: "2025-02",
  },
  {
    id: 5,
    name: 'Music Analyzer',
    description: 'Analyzes frequencies to determine musical context like chords, key, and rhythm.',
    skills: ['python', 'github'],
    featured: false,
    logoOnly: false,
    shortDescription: "Placeholder summary for a future project modal.",
    screenshotDirectory: "/images/projects/project-placeholder-a",
    screenshots: [
      { title: "Overview Screen", caption: "Placeholder screenshot slot one." },
      { title: "Workflow Screen", caption: "Placeholder screenshot slot two." },
    ],
    features: [
      "Placeholder feature description one",
      "Placeholder feature description two",
      "Placeholder feature description three",
    ],
    estimatedLinesOfCode: 2000,
    startDate: "2023-09",
    endDate: "2023-12",
  },
  {
    id: 6,
    name: 'Project Placeholder B',
    description: 'Add your project description here.',
    skills: ['python', 'fastapi', 'docker', 'azure'],
    featured: false,
    logoOnly: false,
    shortDescription: "Placeholder summary for a future project modal.",
    screenshotDirectory: "/images/projects/project-placeholder-b",
    screenshots: [
      { title: "Landing View", caption: "Placeholder screenshot slot one." },
      { title: "Detail View", caption: "Placeholder screenshot slot two." },
    ],
    features: [
      "Placeholder feature description one",
      "Placeholder feature description two",
      "Placeholder feature description three",
    ],
    estimatedLinesOfCode: 5300,
    startDate: "2024-02",
    endDate: "2024-05",
  },
];
