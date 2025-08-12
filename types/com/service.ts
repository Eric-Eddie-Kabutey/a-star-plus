export interface ReasonItem {
  icon: string;
  title: string;
  description: string;
}

// Main type for the entire section's data
export interface KeyReasonsData {
  tagline: string;
  title: string;
  description: string;
  reasons: ReasonItem[];
  imageUrl: string;
  imageAlt: string;
}

// types for industry we server
// Type for a single industry card
export interface Industry {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

// Main type for the entire section's data
export interface IndustrySolutionsData {
  tagline: string;
  title: React.ReactNode;
  description: string;
  industries: Industry[];
}

// How it works
// Type for a single step in the approach
export interface ApproachStep {
  title: string;
  items: string[]; // Can contain one or more bullet points
}

// Main type for the entire section's data
export interface ApproachData {
  tagline: string;
  title: string;
  description: string;
  steps: ApproachStep[];
  cta: {
    text: string;
    href: string;
  };
}

// types for business protection
export interface BusinessProtectionData {
  tagline: string;
  title: React.ReactNode;
  cta: {
    text: string;
    href: string;
  };
  listHeading: string;
  listItems: string[];
  imageUrl: string;
  imageAlt: string;
}