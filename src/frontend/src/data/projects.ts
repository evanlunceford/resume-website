import React from "react";
import AdStrategiesBackground from "../components/projects/AdStrategiesBackground";
import LeaseLiftBackground from "../components/projects/LeaseLiftBackground";
import MrCassetteBackground from "../components/projects/MrCassetteBackground";
import ScoutBackground from "../components/projects/ScoutBackground";

export type Project = {
  id: number;
  name: string;
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
  screenshots: { title: string; caption: string; filename?: string }[];
  link:
    | { type: "public"; href: string }
    | { type: "open-source"; href: string }
    | { type: "private" };
  features: string[];
  estimatedLinesOfCode: number;
  startDate: string;
  endDate: string | "Present";
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'SCOUT',
    skills: ['python', 'fastapi', 'react', 'javascript', 'postgres', 'gcs', 'docker', 'github', 'qdrant', 'firebase', 'css', 'sql'],
    featured: true,
    background: ScoutBackground,
    font: "'Inter', sans-serif",
    fontWeight: "600",
    logo: "/scout-horizontal.png",
    logoOnly: true,
    hue: 150,
    shortDescription: "Internal workforce management platform for students, workers, and employers.",
    screenshotDirectory: "/project-screenshots/scout",
    screenshots: [
      { title: "Home Page", caption: "An overview of a student/worker's portfolio.", filename: "01-home-page.png"},
      { title: "Admin Panel", caption: "Placeholder for internal metrics and workforce reporting.", filename: "02-manage-users.png"},
      { title: "Resume Assessment", caption: "Adds skills, projects, certificates, and work experience to your portfolio.", filename: "03-resume-assessment.png" },
      { title: "Cohort Analysis", caption: "View strengths and weaknesses in your companies skillset.", filename: "04-cohort-analysis.png" },
      { title: "Login Screen", caption: "", filename: "05-login-screen.png" },
      
    ],
    link: { type: "public", href: "https://scoutworkforce.com" },
    features: [
      "Proactive student/worker career mapping to oppurtunities they are interested in.",
      "Analysis and visualization of a group of employees' skillset.",
      "Resume analysis and recommendation engine.",
    ],
    estimatedLinesOfCode: 30000,
    startDate: "2024-08",
    endDate: "Present",
  },
  {
    id: 2,
    name: 'LeaseLift',
    skills: ['python', 'fastapi', 'react', 'javascript', 'postgres', 'gcs', 'docker', 'github', 'css', 'sql'],
    featured: true,
    background: LeaseLiftBackground,
    logoOnly: false,
    shortDescription: "A website that streamlines the relet process for both students and property managers.",
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
    link: { type: "private" },
    estimatedLinesOfCode: 14500,
    startDate: "2024-11",
    endDate: "2025-03",
  },
  {
    id: 3,
    name: 'Ad Strategies Dashboard',
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
    link: { type: "private" },
    estimatedLinesOfCode: 11200,
    startDate: "2024-06",
    endDate: "2024-10",
  },
  {
    id: 4,
    name: 'Mr. Cassette',
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
    link: { type: "open-source", href: "https://github.com/evanlunceford/Sandbox-Hackathon" },
    estimatedLinesOfCode: 8700,
    startDate: "2025-01",
    endDate: "2025-02",
  },
  {
    id: 5,
    name: 'Music Analyzer',
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
    link: { type: "private" },
    estimatedLinesOfCode: 2000,
    startDate: "2023-09",
    endDate: "2023-12",
  },
  {
    id: 6,
    name: 'Project Placeholder B',
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
    link: { type: "private" },
    estimatedLinesOfCode: 5300,
    startDate: "2024-02",
    endDate: "2024-05",
  },
];
