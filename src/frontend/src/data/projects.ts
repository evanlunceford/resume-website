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
      { title: "Home Page", caption: "Shows nearby people looking to relet their leases." },
      { title: "Create a Relet", caption: "Define the specifications of a lease, and add a bounty price to improve transfer chances." },
      { title: "Message System", caption: "Message students about lease takeovers." },
    ],
    features: [
      "Post a relet for people in your area to see.",
      "Browse relets in your university, and collect a bounty for picking up a lease.",
      "Message users about availability & specifications.",
    ],
    link: { type: "public", href: "https://leaselift.app" },
    estimatedLinesOfCode: 15000,
    startDate: "2025-09",
    endDate: "present",
  },
  {
    id: 3,
    name: 'Ad Strategies Dashboard',
    skills: ['python', 'fastapi', 'react', 'typescript', 'java', 'spring-boot', 'postgres', 'gcs', 'docker', 'github', 'css', 'sql'],
    featured: true,
    background: AdStrategiesBackground,
    logoOnly: false,
    shortDescription: "An enterprise analytics dashboard for campaign performance and marketing health.",
    screenshotDirectory: "/images/projects/ad-strategies",
    screenshots: [
      { title: "Campaign Overview", caption: "Placeholder for top-line spend, conversions, and efficiency." },
      { title: "Performance Trends", caption: "Placeholder for time-series graphing across channels." },
      { title: "KPI Breakdown", caption: "Placeholder for drill-down metrics and comparisons." },
    ],
    features: [
      "Full control over user and client management.",
      "Data mapping to generalize statistics across several job boards.",
      "Analytical insights into performance and visibility for the future.",
    ],
    link: { type: "private" },
    estimatedLinesOfCode: 30000,
    startDate: "2025-05",
    endDate: "present",
  },
  {
    id: 4,
    name: 'Mr. Cassette',
    skills: ['javascript', 'react', 'github', 'python', 'fastapi', 'qdrant', 'docker'],
    featured: true,
    background: MrCassetteBackground,
    logoOnly: false,
    shortDescription: "Created for the 2026 Sandbox Hackathon: A website that recommends songs based on a user-provided PDF file.",
    screenshotDirectory: "/project-screenshots/mr-cassette",
    screenshots: [
      { title: "Cassette Player: Waiting for file", caption: "", filename: "01-home-page.png" },
      { title: "Cassette Player: Ready to recommend", caption: "", filename: "02-home-file.png" },
      { title: "Recommendations", caption: "", filename: "03-recommended-songs.png" },
    ],
    features: [
      "10,000 songs in the database to recommend.",
      "Uses cosine similarity on vector embeddings to recommend instead of an LLM.",
      "Open source: https://github.com/evanlunceford/Mr-Cassette",
    ],
    link: { type: "public", href: "https://mr-cassette-626975713933.us-central1.run.app/" },
    estimatedLinesOfCode: 4000,
    startDate: "2025-02",
    endDate: "2025-03",
  },
  {
    id: 5,
    name: 'Music Analyzer',
    skills: ['python', 'github'],
    featured: false,
    logoOnly: false,
    shortDescription: "A tool used to analyze the elements of a song: chords, rhythm, and structure.",
    screenshotDirectory: "/images/projects/project-placeholder-a",
    screenshots: [
      { title: "Overview Screen", caption: "Placeholder screenshot slot one." },
      { title: "Workflow Screen", caption: "Placeholder screenshot slot two." },
    ],
    features: [
      "Detects the key a song is in, and associated chords.",
      "Analyzes the rhythm context of a song.",
      "Graphs songs on a live spectogram for inspection.",
    ],
    link: { type: "open-source", href: "https://github.com/evanlunceford/Music-Visualization" },
    estimatedLinesOfCode: 3000,
    startDate: "2026-02",
    endDate: "present",
  },
  {
    id: 6,
    name: 'Life Concierge',
    skills: ['nodejs', 'express', 'docker', 'gcs', 'react', 'javascript', 'sql', 'css'],
    featured: false,
    logoOnly: false,
    shortDescription: "An AI chat interface for students aging out of the foster care system.",
    screenshotDirectory: "/images/projects/project-placeholder-b",
    screenshots: [
      { title: "Landing View", caption: "Placeholder screenshot slot one." },
      { title: "Detail View", caption: "Placeholder screenshot slot two." },
    ],
    features: [
      "Gives related foster care resources when prompted.",
      "Anonymous mode for heavy conversations, or for user data privacy.",
      "Remembers anonymous users through multiple sessions using cookies.",
    ],
    link: { type: "private" },
    estimatedLinesOfCode: 6000,
    startDate: "2025-04",
    endDate: "2025-11",
  },
  {
    id: 7,
    name: 'Space Mini Mission',
    skills: ['cpp'],
    featured: false,
    logoOnly: false,
    shortDescription: "A low-level time management space simulation.",
    screenshotDirectory: "/images/projects/project-placeholder-b",
    screenshots: [
      { title: "Landing View", caption: "Placeholder screenshot slot one." },
      { title: "Detail View", caption: "Placeholder screenshot slot two." },
    ],
    features: [
      "Handles timeline management across several timelines.",
      "Utilizes linked lists to effiecently manage memory for timelines.",
      "UI to perform CRUD operations on a mission.",
    ],
    link: { type: "open-source", href: "https://github.com/evanlunceford/space-mini-mission" },
    estimatedLinesOfCode: 6000,
    startDate: "2025-04",
    endDate: "2025-11",
  },
];
