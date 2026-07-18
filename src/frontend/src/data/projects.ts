import React from "react";
import AdStrategiesBackground from "../components/projects/AdStrategiesBackground";
import ConversionAuditBackground from "../components/projects/ConversionAuditBackground";
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
      { title: "Cohort Analysis", caption: "View strengths and weaknesses in your company's skillset.", filename: "04-cohort-analysis.png" },
      { title: "Login Screen", caption: "", filename: "05-login-screen.png" }
    ],
    link: { type: "public", href: "https://scoutworkforce.com" },
    features: [
      "Proactive student/worker career mapping to opportunities they are interested in.",
      "Analysis and visualization of a group of employees' skillset.",
      "Resume analysis and recommendation engine."
    ],
    estimatedLinesOfCode: 30000,
    startDate: "2024-08",
    endDate: "Present",
  },
  {
    id: 9,
    name: 'Conversion Audit',
    skills: ['typescript', 'react', 'nodejs', 'postgres', 'docker', 'github', 'css'],
    featured: true,
    background: ConversionAuditBackground,
    logoOnly: true,
    logo: "/conversionaudit.png",
    hue: 150,
    shortDescription: "Finds broken pixels, misfired events, and missing tags before they drain your ad spend.",
    screenshotDirectory: "/project-screenshots/conversion-audit",
    screenshots: [
      { title: "Pixels & Tags", caption: "Public screenshots coming soon." },
      { title: "Active Diagnostics", caption: "Public screenshots coming soon." },
      { title: "Automated Reports", caption: "Public screenshots coming soon." },
    ],
    features: [
      "Direct integration with Google Tag Manager to read the tags already in your container.",
      "Active diagnostics that submit real test conversions to confirm tags actually fire.",
      "Automated daily and weekly tracking health reports across monitored sites and funnels.",
    ],
    link: { type: "public", href: "https://conversionaudit.net" },
    estimatedLinesOfCode: 15000,
    startDate: "2026-06",
    endDate: "Present",
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
      { title: "Campaign Overview", caption: "Public screenshots coming soon." },
      { title: "Performance Trends", caption: "Public screenshots coming soon." },
      { title: "KPI Breakdown", caption: "Public screenshots coming soon." }
    ],
    features: [
      "Full control over user and client management.",
      "Data mapping to generalize statistics across several job boards.",
      "Analytical insights into performance and visibility for the future."
    ],
    link: { type: "private" },
    estimatedLinesOfCode: 30000,
    startDate: "2025-05",
    endDate: "Present",
  },
  {
    id: 4,
    name: 'Mr. Cassette',
    skills: ['javascript', 'react', 'css', 'github', 'python', 'fastapi', 'qdrant', 'docker'],
    featured: true,
    background: MrCassetteBackground,
    logoOnly: false,
    shortDescription: "Created for the 2026 Sandbox Hackathon: A website that recommends songs based on a user-provided PDF file.",
    screenshotDirectory: "/project-screenshots/mr-cassette",
    screenshots: [
      { title: "Cassette Player: Waiting for file", caption: "", filename: "01-home-page.png" },
      { title: "Cassette Player: Ready to recommend", caption: "", filename: "02-home-file.png" },
      { title: "Recommendations", caption: "", filename: "03-recommended-songs.png" }
    ],
    features: [
      "10,000 songs in the database to recommend.",
      "Uses cosine similarity on vector embeddings to recommend instead of an LLM.",
      "Open source: https://github.com/evanlunceford/Mr-Cassette"
    ],
    link: { type: "public", href: "https://mr-cassette-626975713933.us-central1.run.app/" },
    estimatedLinesOfCode: 4000,
    startDate: "2025-02",
    endDate: "2025-03",
  },
  {
    id: 2,
    name: 'LeaseLift',
    skills: ['python', 'fastapi', 'react', 'javascript', 'postgres', 'gcs', 'docker', 'github', 'css', 'sql'],
    featured: true,
    background: LeaseLiftBackground,
    logoOnly: true,
    logo: "/leaselift.png",
    shortDescription: "A website that streamlines the relet process for both students and property managers.",
    screenshotDirectory: "/project-screenshots/leaselift",
    screenshots: [
      { title: "Home Page", caption: "Find or post your relet in minutes.", filename: "01-home-page.png"},
      { title: "Create a Relet", caption: "", filename: "04-create-listing.png" },
      { title: "Message System", caption: "Includes the ability to see chat history & see unread messages.", filename: "05-lease-takeover.png" },
      { title: "Find Relets", caption: "Browse relets based on your university.", filename: "02-find-relets.png" },
      { title: "Relet Page", caption: "View details of a relet, including the bounty price and contact information.", filename: "03-relet-page.png" },
    ],
    features: [
      "Post a relet for people in your area to see.",
      "Browse relets in your university, and collect a bounty for picking up a lease.",
      "Message users about availability & specifications."
    ],
    link: { type: "public", href: "https://leaselift.app" },
    estimatedLinesOfCode: 15000,
    startDate: "2025-09",
    endDate: "Present",
  },
  {
    id: 5,
    name: 'SW Bookkeeping',
    skills: ['typescript', 'github', 'react', 'css'],
    featured: false,
    logoOnly: false,
    shortDescription: "A landing page for a local bookkeeping business.",
    screenshotDirectory: "/project-screenshots/sw-bookkeeping",
    screenshots: [
      { title: "", caption: "", filename: "01-home-screen.png" },
      { title: "", caption: "", filename: "02-prices-section.png" },
      { title: "", caption: "", filename: "03-graph-section.png" },
      { title: "", caption: "", filename: "04-about-section.png" }
    ],
    features: [
      "Custom graphics that fit the brand.",
      "Responsive design for all devices.",
      "Consise explanation of services."
    ],
    link: { type: "public", href: "https://www.sw-books.com/" },
    estimatedLinesOfCode: 5000,
    startDate: "2026-03",
    endDate: "2026-04",
  },
  {
    id: 6,
    name: 'SignatureSound',
    skills: ['typescript', 'react', 'css','github', 'python', 'fastapi', 'qdrant', 'docker'],
    featured: false,
    logoOnly: false,
    shortDescription: "A tool for local musicians to brand their music in minutes.",
    screenshotDirectory: "/project-screenshots/soundsignature",
    screenshots: [
      { title: "Home Screen", caption: "", filename: "01-home-screen.png"},
      { title: "Integrations", caption: "", filename: "02-integration-screen.png" },
      { title: "Features", caption: "", filename: "03-features-screen.png" }
    ],
    features: [
      "Detects a musicians unique musical traits.",
      "Uses vector embeddings to recommend venues to a musician.",
      "Creates a unique profile to share with venues."
    ],
    link: { type: "public", href: "https://signature-sound-landing-page.vercel.app/" },
    estimatedLinesOfCode: 5000,
    startDate: "2026-03",
    endDate: "Present",
  },
  {
    id: 7,
    name: 'Life Concierge',
    skills: ['nodejs', 'express', 'docker', 'gcs', 'react', 'javascript', 'sql', 'css'],
    featured: false,
    logoOnly: false,
    shortDescription: "An AI chat interface for students aging out of the foster care system.",
    screenshotDirectory: "/images/projects/project-placeholder-b",
    screenshots: [
      { title: "Landing View", caption: "Public screenshots coming soon." },
      { title: "Detail View", caption: "Public screenshots coming soon." }
    ],
    features: [
      "Gives related foster care resources when prompted.",
      "Anonymous mode for heavy conversations, or for user data privacy.",
      "Remembers anonymous users through multiple sessions using cookies."
    ],
    link: { type: "private" },
    estimatedLinesOfCode: 6000,
    startDate: "2025-04",
    endDate: "2025-11",
  },
  {
    id: 8,
    name: 'Space Mini Mission',
    skills: ['cpp'],
    featured: false,
    logoOnly: false,
    shortDescription: "A low-level time management space simulation.",
    screenshotDirectory: "/images/projects/project-placeholder-b",
    screenshots: [
      { title: "Landing View", caption: "Public screenshots coming soon." },
      { title: "Detail View", caption: "Public screenshots coming soon." }
    ],
    features: [
      "Handles timeline management across several timelines.",
      "Utilizes linked lists to efficiently manage memory for timelines.",
      "UI to perform CRUD operations on a mission."
    ],
    link: { type: "open-source", href: "https://github.com/evanlunceford/space-mini-mission" },
    estimatedLinesOfCode: 6000,
    startDate: "2025-04",
    endDate: "2025-11",
  },
];