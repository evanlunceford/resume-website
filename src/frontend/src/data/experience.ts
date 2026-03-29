export type Experience = {
  id: number;
  company: string;
  title: string;
  startDate: string;   // "YYYY-MM" or "YYYY"
  endDate: string;     // "YYYY-MM", "YYYY", or "present"
  type: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract' | 'education';
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "NAU Venture Studio",
    title: "Software Engineer",
    startDate: "2025-04",
    endDate: "2026-02",
    type: "part-time",
    description: "Worked on 5 projects and interally co-founded SCOUT Workforce",
  },
  {
    id: 2,
    company: "Ad Strategies",
    title: "Software Engineer & Data Analyst",
    startDate: "2025-05",
    endDate: "present",
    type: "part-time",
    description: "Built an internal data analytics dashboard",
  },
  {
    id: 3,
    company: "Northern Arizona University",
    title: "Bachelor's of Computer Science",
    startDate: "2024-08",
    endDate: "present",
    type: "education",
    description: "Completing a 4-year degree",
  },


];
