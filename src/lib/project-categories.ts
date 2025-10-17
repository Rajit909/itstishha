
export type ProjectCategory = {
  slug: string;
  title: string;
  services: string[];
};

export const projectCategories: ProjectCategory[] = [
  { 
    slug: "quality-accreditation",
    title: "Quality Accreditation",
    services: ["Quality Accreditation", "Healthcare Solutions"]
  },
  { 
    slug: "hims-digital-solution",
    title: "HIMS & Digital Solution",
    services: ["Digital Solution", "IT Consultation"]
  },
  { 
    slug: "hospital-operations-empanelment",
    title: "Hospital Operations & Empanelment",
    services: ["Operational Acquisition", "Healthcare Solutions"]
  },
  { 
    slug: "project-planning-designing",
    title: "Project Planning & Designing",
    services: ["Planning & Designing", "Feasibility Study"]
  },
];
